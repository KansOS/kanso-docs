type Mark = {
    type: string;
    attrs?: Record<string, unknown>;
};
type PMNode = {
    type: string;
    attrs?: Record<string, unknown>;
    content?: PMNode[];
    marks?: Mark[];
    text?: string;
};
export type PMDoc = {
    type: 'doc';
    content: PMNode[];
};
export declare function markdownToProseMirror(md: string): PMDoc;
export {};
