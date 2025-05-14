export class InteraAppsAccountsException extends Error {
    data: any;
    
    constructor(message: string, data: any) {
        super(message, data)
    }
}

export class AlreadyLinked extends InteraAppsAccountsException {
    constructor(data: any) {
        super('This account has already been linked to another account', data);
    }
}

export class AccountNotGrantedApp extends InteraAppsAccountsException {
    constructor(data: any) {
        super('The user did not grant the app you want to access.', data);
    }
}

export class Authentication extends InteraAppsAccountsException {
    constructor(data: any) {
        super('No authkey given or invalid. (bearer or header: x-auth-key)', data);
    }
}

export class AuthenticationInvalid extends InteraAppsAccountsException {
    constructor(data: any) {
        super('Account not found or password is incorrect', data);
    }
}

export class ChallengeFailed extends InteraAppsAccountsException {
    constructor(data: any) {
        super('Challenge failed', data);
    }
}

export class HTTP extends InteraAppsAccountsException {
    status: number;
    constructor(status: number, message: string, data: any) {
        super(message, data);
        this.status = status;
    }
}

export class InternalError extends InteraAppsAccountsException {
    constructor(data: any) {
        super('An internal error occurred', data);
    }
}

export class InvalidRequest extends InteraAppsAccountsException {
    constructor(data: any) {
        super('Invalid Request', data);
    }
}

export class NamespacePermissionsDenied extends InteraAppsAccountsException {
    constructor(data: any) {
        super('You haven\'t got the permission to this resource!', data);
    }
}

export class NotFound extends InteraAppsAccountsException {
    constructor(data: any) {
        super('Page not found', data);
    }
}

export class PermissionsDenied extends InteraAppsAccountsException {
    constructor(data: any) {
        super('You haven\'t got the permission to this resource!', data);
    }
}

export class PrivacyPoliciesNotChecked extends InteraAppsAccountsException {
    constructor(data: any) {
        super('Accept our privacy policies first', data);
    }
}

export class TokenExpired extends InteraAppsAccountsException {
    constructor(data: any) {
        super('Token expired', data);
    }
}