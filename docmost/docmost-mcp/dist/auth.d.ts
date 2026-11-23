export declare function login(): Promise<string>;
export declare function getToken(): Promise<string>;
export declare function invalidateToken(): void;
export declare const getWriteToken: typeof getToken;
export declare const loginWrite: typeof login;
export declare const invalidateWriteToken: typeof invalidateToken;
