import { z } from 'zod';
export declare const listPagesSchema: z.ZodObject<{
    space_id: z.ZodString;
    limit: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    limit: number;
    space_id: string;
}, {
    space_id: string;
    limit?: number | undefined;
}>;
export declare const listPagesDescription = "Liste les pages d'un espace Docmost avec leur arborescence.\nUtilise list_spaces d'abord pour obtenir l'UUID de l'espace.\nRetourne les titres, identifiants et structure parent/enfant des pages.";
export declare function listPages(args: z.infer<typeof listPagesSchema>): Promise<{
    content: {
        type: "text";
        text: string;
    }[];
}>;
