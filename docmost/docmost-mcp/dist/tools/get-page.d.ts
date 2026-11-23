import { z } from 'zod';
export declare const getPageSchema: z.ZodEffects<z.ZodObject<{
    page_id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    page_id?: string | undefined;
}, {
    page_id?: string | undefined;
}>, {
    page_id?: string | undefined;
}, {
    page_id?: string | undefined;
}>;
export declare const getPageDescription = "R\u00E9cup\u00E8re le contenu complet d'une page Docmost en Markdown.\nUtilise cet outil apr\u00E8s search_docs pour obtenir le contenu d'une page \u00E0 partir de son identifiant.\npage_id accepte un UUID complet ou un slugId court (ex: \"abc12345\" visible dans l'URL).";
export declare function getPage(args: z.infer<typeof getPageSchema>): Promise<{
    content: {
        type: "text";
        text: string;
    }[];
}>;
