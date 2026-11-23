import { z } from 'zod';
export declare const updatePageSchema: z.ZodObject<{
    page_id: z.ZodString;
    updated_at: z.ZodString;
    title: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
    operation: z.ZodDefault<z.ZodEnum<["replace", "append", "prepend"]>>;
}, "strip", z.ZodTypeAny, {
    operation: "replace" | "append" | "prepend";
    page_id: string;
    updated_at: string;
    title?: string | undefined;
    content?: string | undefined;
}, {
    page_id: string;
    updated_at: string;
    title?: string | undefined;
    content?: string | undefined;
    operation?: "replace" | "append" | "prepend" | undefined;
}>;
export declare const updatePageDescription = "Met \u00E0 jour le titre et/ou le contenu d'une page Docmost.\nN\u00E9cessite DOCMOST_ALLOW_WRITE=true.\nRequiert updated_at (obtenu via get_page) : refuse si la page a \u00E9t\u00E9 modifi\u00E9e depuis la lecture (verrouillage optimiste).\nPasser uniquement les champs \u00E0 modifier \u2014 les autres sont conserv\u00E9s.";
export declare function updatePage(args: z.infer<typeof updatePageSchema>): Promise<{
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
