class InteraAppsAccountsException extends Error {
    data;
    constructor(message, data) {
        super(message, data);
    }
}
class AlreadyLinked extends InteraAppsAccountsException {
    constructor(data) {
        super('This account has already been linked to another account', data);
    }
}
class AccountNotGrantedApp extends InteraAppsAccountsException {
    constructor(data) {
        super('The user did not grant the app you want to access.', data);
    }
}
class Authentication extends InteraAppsAccountsException {
    constructor(data) {
        super('No authkey given or invalid. (bearer or header: x-auth-key)', data);
    }
}
class AuthenticationInvalid extends InteraAppsAccountsException {
    constructor(data) {
        super('Account not found or password is incorrect', data);
    }
}
class ChallengeFailed extends InteraAppsAccountsException {
    constructor(data) {
        super('Challenge failed', data);
    }
}
class HTTP extends InteraAppsAccountsException {
    status;
    constructor(status, message, data) {
        super(message, data);
        this.status = status;
    }
}
class InternalError extends InteraAppsAccountsException {
    constructor(data) {
        super('An internal error occurred', data);
    }
}
class InvalidRequest extends InteraAppsAccountsException {
    constructor(data) {
        super('Invalid Request', data);
    }
}
class NamespacePermissionsDenied extends InteraAppsAccountsException {
    constructor(data) {
        super('You haven\'t got the permission to this resource!', data);
    }
}
class NotFound extends InteraAppsAccountsException {
    constructor(data) {
        super('Page not found', data);
    }
}
class PermissionsDenied extends InteraAppsAccountsException {
    constructor(data) {
        super('You haven\'t got the permission to this resource!', data);
    }
}
class PrivacyPoliciesNotChecked extends InteraAppsAccountsException {
    constructor(data) {
        super('Accept our privacy policies first', data);
    }
}
class TokenExpired extends InteraAppsAccountsException {
    constructor(data) {
        super('Token expired', data);
    }
}

export { AccountNotGrantedApp, AlreadyLinked, Authentication, AuthenticationInvalid, ChallengeFailed, HTTP, InteraAppsAccountsException, InternalError, InvalidRequest, NamespacePermissionsDenied, NotFound, PermissionsDenied, PrivacyPoliciesNotChecked, TokenExpired };
//# sourceMappingURL=exceptions.mjs.map
