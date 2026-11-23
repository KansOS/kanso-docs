const LOGIN_URL = () => `${process.env.DOCMOST_URL}/api/auth/login`;
async function doLogin(email, password, hint) {
    const res = await fetch(LOGIN_URL(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    if (!res.ok) {
        throw new Error(`Login failed [${res.status}]: credentials refused — check ${hint}`);
    }
    const setCookie = res.headers.get('set-cookie') ?? '';
    const match = setCookie.match(/authToken=([^;]+)/);
    if (!match)
        throw new Error('Login succeeded but no authToken cookie in response');
    return match[1];
}
// ─── Read account (DOCMOST_EMAIL / DOCMOST_PASSWORD) ─────────────────────────
let cachedToken = null;
export async function login() {
    const email = process.env.DOCMOST_EMAIL;
    const password = process.env.DOCMOST_PASSWORD;
    if (!email || !password || !process.env.DOCMOST_URL) {
        throw new Error('Missing required env vars: DOCMOST_URL, DOCMOST_EMAIL, DOCMOST_PASSWORD');
    }
    cachedToken = await doLogin(email, password, 'DOCMOST_EMAIL and DOCMOST_PASSWORD');
    return cachedToken;
}
export async function getToken() {
    if (cachedToken)
        return cachedToken;
    return login();
}
export function invalidateToken() {
    cachedToken = null;
}
// Écriture : même compte que la lecture
export const getWriteToken = getToken;
export const loginWrite = login;
export const invalidateWriteToken = invalidateToken;
