import { z } from 'zod';
export declare const createPageSchema: z.ZodObject<{
    space_slug: z.ZodString;
    title: z.ZodString;
    content: z.ZodOptional<z.ZodString>;
    parent_page_id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title: string;
    space_slug: string;
    content?: string | undefined;
    parent_page_id?: string | undefined;
}, {
    title: string;
    space_slug: string;
    content?: string | undefined;
    parent_page_id?: string | undefined;
}>;
export declare const createPageDescription = "Cr\u00E9e une nouvelle page dans un espace Docmost.\nN\u00E9cessite DOCMOST_ALLOW_WRITE=true et un compte de service en \u00E9criture distinct.\nAccepte le contenu en Markdown (titres, listes, blocs de code, gras/italique).\nRetourne l'UUID et le slugId de la page cr\u00E9\u00E9e.";
export declare function createPage(args: z.infer<typeof createPageSchema>): Promise<{
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
