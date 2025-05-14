export class PunyshortException extends Error {
    data: any;

    constructor(message: string, data?: any) {
        super(message);
        this.data = data;
    }
}

export class AuthenticationException extends PunyshortException {
    constructor(data?: any) {
        super('Not authenticated', data);
    }
}

export class BadRequestException extends PunyshortException {
    constructor(message: string = 'Bad request', data?: any) {
        super(message, data);
    }
}

export class NotFoundException extends PunyshortException {
    constructor(message: string = 'Resource not found', data?: any) {
        super(message, data);
    }
}

export class AwaitingAccessException extends PunyshortException {
    constructor(data?: any) {
        super('Awaiting access', data);
    }
}

export class BlockedException extends PunyshortException {
    constructor(data?: any) {
        super('Blocked', data);
    }
}

export class FeatureDisabledException extends PunyshortException {
    constructor(data?: any) {
        super('Feature disabled', data);
    }
}

export class FilteredOutException extends PunyshortException {
    constructor(data?: any) {
        super('Filtered out', data);
    }
}

export class InternalErrorException extends PunyshortException {
    constructor(data?: any) {
        super('Resource not found', data);
    }
}

export class PermissionsDeniedException extends PunyshortException {
    constructor(data?: any) {
        super('You haven\'t got the permission to this resource!', data);
    }
}

// --- BadRequestException Ableitungen ---
export class AnotherAdminNeededException extends BadRequestException {
    constructor(data?: any) {
        super('Another admin needed', data);
    }
}

export class DomainInvalidOrTakenException extends BadRequestException {
    constructor(data?: any) {
        super('Domain invalid or taken', data);
    }
}

export class InvalidLinkException extends BadRequestException {
    constructor(data?: any) {
        super('Invalid link', data);
    }
}

export class InvalidPathException extends BadRequestException {
    constructor(data?: any) {
        super('Invalid path', data);
    }
}

export class InvalidURLException extends BadRequestException {
    constructor(data?: any) {
        super('Invalid URL', data);
    }
}

export class PathTakenException extends BadRequestException {
    constructor(data?: any) {
        super('Path taken', data);
    }
}

export class PathTooShortException extends BadRequestException {
    constructor(data?: any) {
        super('Path too short', data);
    }
}

export class WorkspaceSlugInvalidException extends BadRequestException {
    constructor(data?: any) {
        super('Workspace slug invalid', data);
    }
}

export class WorkspaceTakenException extends BadRequestException {
    constructor(data?: any) {
        super('Workspace taken', data);
    }
}

export class DomainNotFoundException extends NotFoundException {
    constructor(data?: any) {
        super('Domain not found', data);
    }
}

export class NoDefaultDomainFoundException extends NotFoundException {
    constructor(data?: any) {
        super('No default domain found', data);
    }
}