import { z } from 'zod';
declare const zCursorMeta: z.ZodOptional<z.ZodObject<{
    limit: z.ZodNumber;
    hasNextPage: z.ZodBoolean;
    hasPrevPage: z.ZodBoolean;
    nextCursor: z.ZodNullable<z.ZodString>;
    prevCursor: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    limit: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    nextCursor: string | null;
    prevCursor: string | null;
}, {
    limit: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    nextCursor: string | null;
    prevCursor: string | null;
}>>;
declare const zSpaceItem: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    slug: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    membership: z.ZodOptional<z.ZodObject<{
        role: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        role: string;
    }, {
        role: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    slug: string;
    description?: string | null | undefined;
    membership?: {
        role: string;
    } | undefined;
}, {
    id: string;
    name: string;
    slug: string;
    description?: string | null | undefined;
    membership?: {
        role: string;
    } | undefined;
}>;
declare const zPageItem: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    slugId: z.ZodString;
    spaceId: z.ZodString;
    parentPageId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    hasChildren: z.ZodOptional<z.ZodBoolean>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    slugId: string;
    spaceId: string;
    title?: string | null | undefined;
    parentPageId?: string | null | undefined;
    hasChildren?: boolean | undefined;
    updatedAt?: string | undefined;
}, {
    id: string;
    slugId: string;
    spaceId: string;
    title?: string | null | undefined;
    parentPageId?: string | null | undefined;
    hasChildren?: boolean | undefined;
    updatedAt?: string | undefined;
}>;
declare const zSearchItem: z.ZodObject<{
    id: z.ZodString;
    slugId: z.ZodString;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    highlight: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    rank: z.ZodOptional<z.ZodNumber>;
    space: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        slug: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        slug: string;
        id?: string | undefined;
    }, {
        name: string;
        slug: string;
        id?: string | undefined;
    }>>;
    wholeWord: z.ZodOptional<z.ZodBoolean>;
    matchedText: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    id: string;
    slugId: string;
    title?: string | null | undefined;
    highlight?: string | null | undefined;
    rank?: number | undefined;
    space?: {
        name: string;
        slug: string;
        id?: string | undefined;
    } | undefined;
    wholeWord?: boolean | undefined;
    matchedText?: string[] | undefined;
}, {
    id: string;
    slugId: string;
    title?: string | null | undefined;
    highlight?: string | null | undefined;
    rank?: number | undefined;
    space?: {
        name: string;
        slug: string;
        id?: string | undefined;
    } | undefined;
    wholeWord?: boolean | undefined;
    matchedText?: string[] | undefined;
}>;
declare const zPageDetail: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    slugId: z.ZodString;
    spaceId: z.ZodString;
    parentPageId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    content: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
    space: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        slug: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        slug: string;
    }, {
        id: string;
        name: string;
        slug: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    slugId: string;
    spaceId: string;
    title?: string | null | undefined;
    parentPageId?: string | null | undefined;
    updatedAt?: string | undefined;
    space?: {
        id: string;
        name: string;
        slug: string;
    } | undefined;
    content?: string | null | undefined;
    createdAt?: string | undefined;
}, {
    id: string;
    slugId: string;
    spaceId: string;
    title?: string | null | undefined;
    parentPageId?: string | null | undefined;
    updatedAt?: string | undefined;
    space?: {
        id: string;
        name: string;
        slug: string;
    } | undefined;
    content?: string | null | undefined;
    createdAt?: string | undefined;
}>;
export type SpaceItem = z.infer<typeof zSpaceItem>;
export type PageItem = z.infer<typeof zPageItem>;
export type PageDetail = z.infer<typeof zPageDetail>;
export type SearchResultItem = z.infer<typeof zSearchItem>;
export interface PaginatedResponse<T> {
    items: T[];
    meta?: z.infer<typeof zCursorMeta>;
}
export declare function fetchSpaces(): Promise<PaginatedResponse<SpaceItem>>;
export declare function fetchSidebarPages(spaceId: string, limit?: number): Promise<PaginatedResponse<PageItem>>;
export declare function fetchPageInfo(pageId: string): Promise<PageDetail>;
export declare function fetchSearch(query: string, spaceId?: string, limit?: number): Promise<PaginatedResponse<SearchResultItem>>;
declare const zCreatedPage: z.ZodObject<{
    id: z.ZodString;
    slugId: z.ZodString;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    spaceId: z.ZodString;
    parentPageId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    slugId: string;
    spaceId: string;
    title?: string | null | undefined;
    parentPageId?: string | null | undefined;
    updatedAt?: string | undefined;
    createdAt?: string | undefined;
}, {
    id: string;
    slugId: string;
    spaceId: string;
    title?: string | null | undefined;
    parentPageId?: string | null | undefined;
    updatedAt?: string | undefined;
    createdAt?: string | undefined;
}>;
export type CreatedPage = z.infer<typeof zCreatedPage>;
export declare function createDocmostPage(spaceId: string, title: string, markdown: string, parentPageId?: string): Promise<CreatedPage>;
export declare function updateDocmostPage(pageId: string, operation: 'replace' | 'append' | 'prepend', title?: string, markdown?: string): Promise<CreatedPage>;
export {};
