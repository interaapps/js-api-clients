class PunyshortException extends Error {
    data;
    constructor(message, data) {
        super(message);
        this.data = data;
    }
}
class AuthenticationException extends PunyshortException {
    constructor(data) {
        super('Not authenticated', data);
    }
}
class BadRequestException extends PunyshortException {
    constructor(message = 'Bad request', data) {
        super(message, data);
    }
}
class NotFoundException extends PunyshortException {
    constructor(message = 'Resource not found', data) {
        super(message, data);
    }
}
class AwaitingAccessException extends PunyshortException {
    constructor(data) {
        super('Awaiting access', data);
    }
}
class BlockedException extends PunyshortException {
    constructor(data) {
        super('Blocked', data);
    }
}
class FeatureDisabledException extends PunyshortException {
    constructor(data) {
        super('Feature disabled', data);
    }
}
class FilteredOutException extends PunyshortException {
    constructor(data) {
        super('Filtered out', data);
    }
}
class InternalErrorException extends PunyshortException {
    constructor(data) {
        super('Resource not found', data);
    }
}
class PermissionsDeniedException extends PunyshortException {
    constructor(data) {
        super('You haven\'t got the permission to this resource!', data);
    }
}
// --- BadRequestException Ableitungen ---
class AnotherAdminNeededException extends BadRequestException {
    constructor(data) {
        super('Another admin needed', data);
    }
}
class DomainInvalidOrTakenException extends BadRequestException {
    constructor(data) {
        super('Domain invalid or taken', data);
    }
}
class InvalidLinkException extends BadRequestException {
    constructor(data) {
        super('Invalid link', data);
    }
}
class InvalidPathException extends BadRequestException {
    constructor(data) {
        super('Invalid path', data);
    }
}
class InvalidURLException extends BadRequestException {
    constructor(data) {
        super('Invalid URL', data);
    }
}
class PathTakenException extends BadRequestException {
    constructor(data) {
        super('Path taken', data);
    }
}
class PathTooShortException extends BadRequestException {
    constructor(data) {
        super('Path too short', data);
    }
}
class WorkspaceSlugInvalidException extends BadRequestException {
    constructor(data) {
        super('Workspace slug invalid', data);
    }
}
class WorkspaceTakenException extends BadRequestException {
    constructor(data) {
        super('Workspace taken', data);
    }
}
class DomainNotFoundException extends NotFoundException {
    constructor(data) {
        super('Domain not found', data);
    }
}
class NoDefaultDomainFoundException extends NotFoundException {
    constructor(data) {
        super('No default domain found', data);
    }
}

export { AnotherAdminNeededException, AuthenticationException, AwaitingAccessException, BadRequestException, BlockedException, DomainInvalidOrTakenException, DomainNotFoundException, FeatureDisabledException, FilteredOutException, InternalErrorException, InvalidLinkException, InvalidPathException, InvalidURLException, NoDefaultDomainFoundException, NotFoundException, PathTakenException, PathTooShortException, PermissionsDeniedException, PunyshortException, WorkspaceSlugInvalidException, WorkspaceTakenException };
//# sourceMappingURL=exceptions.mjs.map
