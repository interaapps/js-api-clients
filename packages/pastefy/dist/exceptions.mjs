class AuthenticationException extends Error {
    constructor(data) {
        super('Authentication failed', data);
    }
}
class AwaitingAccessException extends Error {
    constructor(data) {
        super('Awaiting access', data);
    }
}
class BlockedException extends Error {
    constructor(data) {
        super('Account is Blocked', data);
    }
}
class FeatureDisabledException extends Error {
    constructor(data) {
        super('Feature disabled', data);
    }
}
class NotFoundException extends Error {
    constructor(data) {
        super('Not found', data);
    }
}
class PastePrivateException extends Error {
    constructor(data) {
        super('Paste is private', data);
    }
}
class PermissionsDeniedException extends Error {
    constructor(data) {
        super('Permissions denied', data);
    }
}

export { AuthenticationException, AwaitingAccessException, BlockedException, FeatureDisabledException, NotFoundException, PastePrivateException, PermissionsDeniedException };
//# sourceMappingURL=exceptions.mjs.map
