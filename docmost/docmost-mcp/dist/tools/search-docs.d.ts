import { z } from 'zod';
export declare const searchDocsSchema: z.ZodObject<{
    query: z.ZodString;
    space_slug: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    limit: number;
    query: string;
    space_slug?: string | undefined;
}, {
    query: string;
    limit?: number | undefined;
    space_slug?: string | undefined;
}>;
export declare const searchDocsDescription = "Recherche plein-texte dans les pages Docmost.\nPoint d'entr\u00E9e principal : utilise search_docs avant get_page sauf si tu as d\u00E9j\u00E0 un identifiant de page.\nAccepte un space_slug optionnel pour filtrer la recherche \u00E0 un seul espace (utilise list_spaces pour les slugs).\nRetourne les titres, extraits et identifiants des pages correspondantes.";
export declare function searchDocs(args: z.infer<typeof searchDocsSchema>): Promise<{
    content: {
        type: "text";
        text: string;
    }[];
    isError: boolean;
} | {
    content: {
        type: "text";
        text: string;
    }[];
    isError?: undefined;
}>;
