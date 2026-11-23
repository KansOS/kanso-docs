import { z } from 'zod';
import { getToken, login, invalidateToken } from './auth.js';
const DEBUG = process.env.DOCMOST_DEBUG === '1';
function debugLog(method, url, status, rawBody) {
    if (!DEBUG)
        return;
    const safeUrl = url.replace(/authToken=[^&;]*/g, 'authToken=[REDACTED]');
    process.stderr.write(`[docmost-mcp:debug] ${method} ${safeUrl} → ${status}\n  body: ${rawBody.slice(0, 500)}\n`);
}
// ─── Transport ────────────────────────────────────────────────────────────────
async function apiPostRaw(path, body) {
    const token = await getToken();
    const url = `${process.env.DOCMOST_URL}/api${path}`;
    const doFetch = (tok) => fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Cookie: `authToken=${tok}` },
        body: JSON.stringify(body),
    });
    let res = await doFetch(token);
    let rawText = await res.text();
    debugLog('POST', url, res.status, rawText);
    if (res.status === 401) {
        invalidateToken();
        const fresh = await login();
        res = await doFetch(fresh);
        rawText = await res.text();
        debugLog('POST(retry)', url, res.status, rawText);
    }
    if (!res.ok) {
        throw new Error(`POST ${path} [${res.status}]: ${rawText.slice(0, 200)}`);
    }
    return { status: res.status, text: rawText };
}
// ─── Zod schemas (forme réelle observée le 2026-10-12) ───────────────────────
const zCursorMeta = z.object({
    limit: z.number(),
    hasNextPage: z.boolean(),
    hasPrevPage: z.boolean(),
    nextCursor: z.string().nullable(),
    prevCursor: z.string().nullable(),
}).optional();
const zSpaceItem = z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
    description: z.string().nullable().optional(),
    membership: z.object({ role: z.string() }).optional(),
});
const zSpacesData = z.object({
    items: z.array(zSpaceItem),
    meta: zCursorMeta,
});
const zPageItem = z.object({
    id: z.string(),
    title: z.string().nullable().optional(),
    slugId: z.string(),
    spaceId: z.string(),
    parentPageId: z.string().nullable().optional(),
    hasChildren: z.boolean().optional(),
    updatedAt: z.string().optional(),
});
const zPagesData = z.object({
    items: z.array(zPageItem),
    meta: zCursorMeta,
});
const zSearchItem = z.object({
    id: z.string(),
    slugId: z.string(),
    title: z.string().nullable().optional(),
    // spaceId absent de la réponse search — l'id d'espace est dans space.id
    highlight: z.string().nullable().optional(),
    rank: z.number().optional(),
    space: z.object({ id: z.string().optional(), name: z.string(), slug: z.string() }).optional(),
    wholeWord: z.boolean().optional(),
    matchedText: z.array(z.string()).optional(),
});
const zSearchData = z.object({
    items: z.array(zSearchItem),
    meta: zCursorMeta,
});
const zPageDetail = z.object({
    id: z.string(),
    title: z.string().nullable().optional(),
    slugId: z.string(),
    spaceId: z.string(),
    parentPageId: z.string().nullable().optional(),
    content: z.string().nullable().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    space: z.object({ id: z.string(), name: z.string(), slug: z.string() }).optional(),
});
// L'enveloppe universelle : { data: T, success: boolean, status: number }
function zEnvelope(dataSchema) {
    return z.object({ data: dataSchema, success: z.boolean().optional(), status: z.number().optional() });
}
// Parse + erreur lisible qui nomme la route et le champ manquant
function parseOrThrow(schema, raw, path) {
    let parsed;
    try {
        parsed = JSON.parse(raw);
    }
    catch {
        throw new Error(`POST ${path}: réponse non-JSON : ${raw.slice(0, 200)}`);
    }
    const result = schema.safeParse(parsed);
    if (!result.success) {
        const issues = result.error.issues
            .map((i) => `${i.path.join('.')}: ${i.message}`)
            .join('; ');
        throw new Error(`POST ${path}: forme de réponse inattendue — ${issues} — brut: ${raw.slice(0, 200)}`);
    }
    return result.data;
}
// ─── API calls ────────────────────────────────────────────────────────────────
export async function fetchSpaces() {
    const { text } = await apiPostRaw('/spaces/', { limit: 100 });
    return parseOrThrow(zEnvelope(zSpacesData), text, '/spaces/').data;
}
export async function fetchSidebarPages(spaceId, limit = 100) {
    const { text } = await apiPostRaw('/pages/sidebar-pages', { spaceId, limit });
    return parseOrThrow(zEnvelope(zPagesData), text, '/pages/sidebar-pages').data;
}
export async function fetchPageInfo(pageId) {
    const { text } = await apiPostRaw('/pages/info', { pageId, format: 'markdown' });
    return parseOrThrow(zEnvelope(zPageDetail), text, '/pages/info').data;
}
export async function fetchSearch(query, spaceId, limit = 10) {
    const { text } = await apiPostRaw('/search', { query, ...(spaceId ? { spaceId } : {}), limit, offset: 0 });
    return parseOrThrow(zEnvelope(zSearchData), text, '/search').data;
}
// ─── Write API ────────────────────────────────────────────────────────────────
const zCreatedPage = z.object({
    id: z.string(),
    slugId: z.string(),
    title: z.string().nullable().optional(),
    spaceId: z.string(),
    parentPageId: z.string().nullable().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
});
export async function createDocmostPage(spaceId, title, markdown, parentPageId) {
    // 1. Créer la page (titre + espace, sans contenu)
    const { text: createText } = await apiPostRaw('/pages/create', {
        spaceId,
        title,
        ...(parentPageId ? { parentPageId } : {}),
    });
    const page = parseOrThrow(zEnvelope(zCreatedPage), createText, '/pages/create').data;
    // 2. Injecter le contenu — rollback si ça échoue (évite de laisser une page vide)
    if (markdown.trim()) {
        try {
            await apiPostRaw('/pages/update', {
                pageId: page.id,
                title,
                content: markdown,
                operation: 'replace',
                format: 'markdown',
            });
        }
        catch (err) {
            await apiPostRaw('/pages/delete', { pageId: page.id }).catch(() => { });
            throw err;
        }
    }
    return page;
}
export async function updateDocmostPage(pageId, operation, title, markdown) {
    const body = { pageId, operation, format: 'markdown' };
    if (title !== undefined)
        body.title = title;
    if (markdown !== undefined)
        body.content = markdown;
    const { text } = await apiPostRaw('/pages/update', body);
    return parseOrThrow(zEnvelope(zCreatedPage), text, '/pages/update').data;
}
