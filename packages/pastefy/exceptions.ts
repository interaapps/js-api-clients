export class AuthenticationException extends Error { constructor(data: any) {
    super('Authentication failed', data);
}}
export class AwaitingAccessException extends Error {
    constructor(data: any) {
        super('Awaiting access', data);
    }
}
export class BlockedException extends Error {
    constructor(data: any) {
        super('Account is Blocked', data);
    }
}
export class FeatureDisabledException extends Error {
    constructor(data: any) {
        super('Feature disabled', data);
    }
}
export class NotFoundException extends Error {
    constructor(data: any) {
        super('Not found', data);
    }
}
export class PastePrivateException extends Error {
    constructor(data: any) {
        super('Paste is private', data);
    }
}
export class PermissionsDeniedException extends Error {
    constructor(data: any) {
        super('Permissions denied', data);
    }
}