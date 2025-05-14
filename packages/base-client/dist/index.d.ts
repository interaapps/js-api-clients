import { Axios } from 'axios';

declare class UnkownException extends Error {
}
declare class BaseClient extends Axios {
    registeredExceptions: Record<string, ({
        new (t: any): Error;
    })>;
    constructor(baseURL?: string);
    fork(baseClient: BaseClient): this;
    setBaseURL(baseURL: string): this;
    setHeader(key: string, value: string): this;
    setBearerToken(token: string): this;
    removeHeader(key: string): this;
    removeBearerToken(): this;
}

export { BaseClient, UnkownException };
