import { z } from 'zod';
export declare const listSpacesSchema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
export declare const listSpacesDescription = "Liste tous les espaces (spaces) Docmost accessibles par le compte de service.\nUtilise cet outil en premier pour d\u00E9couvrir les espaces disponibles avant de chercher ou lire des pages.";
export declare function listSpaces(_args: z.infer<typeof listSpacesSchema>): Promise<{
    content: {
        type: "text";
        text: string;
    }[];
}>;
