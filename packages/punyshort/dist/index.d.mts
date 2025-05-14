import { BaseClient } from '@interaapps/base-client';

declare class PunyshortException extends Error {
    data: any;
    constructor(message: string, data?: any);
}
declare class AuthenticationException extends PunyshortException {
    constructor(data?: any);
}
declare class BadRequestException extends PunyshortException {
    constructor(message?: string, data?: any);
}
declare class NotFoundException extends PunyshortException {
    constructor(message?: string, data?: any);
}
declare class AwaitingAccessException extends PunyshortException {
    constructor(data?: any);
}
declare class BlockedException extends PunyshortException {
    constructor(data?: any);
}
declare class FeatureDisabledException extends PunyshortException {
    constructor(data?: any);
}
declare class FilteredOutException extends PunyshortException {
    constructor(data?: any);
}
declare class InternalErrorException extends PunyshortException {
    constructor(data?: any);
}
declare class PermissionsDeniedException extends PunyshortException {
    constructor(data?: any);
}
declare class AnotherAdminNeededException extends BadRequestException {
    constructor(data?: any);
}
declare class DomainInvalidOrTakenException extends BadRequestException {
    constructor(data?: any);
}
declare class InvalidLinkException extends BadRequestException {
    constructor(data?: any);
}
declare class InvalidPathException extends BadRequestException {
    constructor(data?: any);
}
declare class InvalidURLException extends BadRequestException {
    constructor(data?: any);
}
declare class PathTakenException extends BadRequestException {
    constructor(data?: any);
}
declare class PathTooShortException extends BadRequestException {
    constructor(data?: any);
}
declare class WorkspaceSlugInvalidException extends BadRequestException {
    constructor(data?: any);
}
declare class WorkspaceTakenException extends BadRequestException {
    constructor(data?: any);
}
declare class DomainNotFoundException extends NotFoundException {
    constructor(data?: any);
}
declare class NoDefaultDomainFoundException extends NotFoundException {
    constructor(data?: any);
}

type ShortenLinkType = 'SHORTEN_LINK';
type EditUserRequest = {
    name: string;
    unique_name: string;
    type: string;
};
type CreateAccessTokenRequest = {
    type: string;
};
type CreateDomainRequest = {
    name: string;
    dns_type: string;
    dns_settings: any;
    is_public?: boolean;
};
type FollowLinkRequest = {
    ip: string;
    user_agent: string;
    referrer: string;
    domain: string;
    path: string;
};
type ShortenLinkRequest = {
    domain: string;
    path?: string;
    long_link: string;
    type?: ShortenLinkType;
    workspace_id?: string;
    tags?: string[];
};
type AddDomainRequest = {
    domain_id: string;
};
type CreateWorkspaceInvitationRequest = {
    email: string;
    role: string;
};
type CreateWorkspaceRequest = {
    name: string;
    slug: string;
};
type EditWorkspaceUserRequest = {
    role: string;
};
type Filters = {
    search?: string;
    page?: number;
    page_size?: number;
    order_by?: string;
    order_desc?: string;
};
type ShortenLinkFilters = Filters & {
    filter_domain?: string;
    filter_path?: string;
    filter_tags?: string[];
    filter_userId?: string[];
    filter_fullShortenUrl?: string[];
    filter_workspaceId?: string;
    filter_type?: string;
};

type PaginationData = {
    total: number;
    page: number;
    limit: number;
};
type ActionResponse = {
    success: boolean;
};
type PaginatedResponse<T> = ActionResponse & {
    data: T[];
    pagination: PaginationData;
};
type List<T> = ActionResponse & {
    data: T[];
};
type Exception = ActionResponse & {
    exception: string;
    error: boolean;
    exists: boolean;
};
type User = {
    logged_in: boolean;
    id: string;
    name: string;
    color: string;
    profile_picture: string;
    auth_type: string;
    auth_types: string[];
    type: string;
};
type Session = ActionResponse & {
    session: string;
};
type CreateAccessToken = ActionResponse & {
    key: string;
};
type ShortenLink = {
    id: string;
    long_link: string;
    domain: Domain;
    path: string;
    full_link: string;
    type: string;
    compact_stats: ShortenLinkCompactStats;
    tags: string[];
    workspace_id: string;
    user: WorkspaceUser;
};
type ShortenLinkCompactStats = {
    total: number;
    most_visiting_country: string;
    clicks_today: number;
};
type ShortenLinkActionResponse = ActionResponse;
type FollowLink = ActionResponse & {
    link: string;
};
type ShortenLinkShortStats = {
    total_clicks: number;
    most_visited_country: string;
};
type Domain = {
    id: string;
    name: string;
    dns_type: string;
    dns_settings: any;
    locked: boolean;
    is_public: boolean;
    is_active: boolean;
};
type WorkspaceUser = {
    id: string;
    name: string;
    unique_name: string;
    email: string;
    avatar: string;
    role: string;
    state: string;
};
type Workspace = {
    id: string;
    name: string;
    slug: string;
    created_at: string;
    users: WorkspaceUser[];
    domains: Domain[];
};
type AppInfo = {
    custom_logo: string;
    custom_name: string;
    custom_footer: Record<string, string>;
    encryption_is_default: boolean;
};
type Stats = {
    created_pastes: number;
    logged_in_pastes: number;
};
type DateStats = {
    id: number;
    count: number;
    date: string;
    link_id: string;
    created_at: string;
    updated_at: string;
};
type CountryStats = {
    id: number;
    count: number;
    country_code: string;
    link_id: string;
    created_at: string;
    updated_at: string;
};
type OperatingSystemStats = {
    id: number;
    count: number;
    operating_system: string;
    link_id: string;
    created_at: string;
    updated_at: string;
};

declare class PunyshortClient extends BaseClient {
    constructor(apiToken?: string | undefined, baseURL?: string);
    setApiToken(token: string): this;
    getUser(): Promise<User>;
    editUser(id: string, req: EditUserRequest): Promise<ActionResponse>;
    createAccessToken(req: CreateAccessTokenRequest): Promise<CreateAccessToken>;
    getAccessTokens(): Promise<string[]>;
    deleteAccessToken(key: string): Promise<ActionResponse>;
    getDomains(): Promise<PaginatedResponse<Domain>>;
    createDomain(req: CreateDomainRequest): Promise<Domain>;
    deleteDomain(id: string): Promise<ActionResponse>;
    shortenLink(req: ShortenLinkRequest): Promise<ShortenLink>;
    getShortenLinks(params?: ShortenLinkFilters): Promise<PaginatedResponse<ShortenLink>>;
    getShortenLink(id: string): Promise<ShortenLink>;
    editShortenLink(id: string, req: ShortenLinkRequest): Promise<ActionResponse>;
    deleteShortenLink(id: string): Promise<ActionResponse>;
    getShortenLinkStatsTotal(id: string): Promise<number>;
    getShortenLinkDateStats(id: string, params?: Filters): Promise<PaginatedResponse<DateStats>>;
    getShortenLinkCountryStats(id: string, params?: Filters): Promise<PaginatedResponse<CountryStats>>;
    getShortenLinkOperatingSystemStats(id: string, params?: Filters): Promise<PaginatedResponse<OperatingSystemStats>>;
    followLink(req: FollowLinkRequest): Promise<ShortenLink>;
    getWorkspaces(params?: Filters): Promise<PaginatedResponse<Workspace>>;
    createWorkspace(req: CreateWorkspaceRequest): Promise<Workspace>;
    deleteWorkspace(id: string): Promise<ActionResponse>;
    getWorkspace(id: string): Promise<Workspace>;
    getWorkspaceUsers(workspaceId: string, params?: Filters): Promise<PaginatedResponse<WorkspaceUser>>;
    inviteWorkspaceUser(workspaceId: string, req: CreateWorkspaceInvitationRequest): Promise<ActionResponse>;
    editWorkspaceUser(workspaceId: string, userId: string, req: EditWorkspaceUserRequest): Promise<ActionResponse>;
    removeWorkspaceUser(workspaceId: string, userId: string): Promise<ActionResponse>;
    acceptWorkspaceInvitation(workspaceId: string, userId: string): Promise<ActionResponse>;
    getWorkspaceDomains(workspaceId: string, params?: Filters): Promise<PaginatedResponse<Domain>>;
    addWorkspaceDomain(workspaceId: string, req: AddDomainRequest): Promise<Domain>;
    removeWorkspaceDomain(workspaceId: string, domainId: string): Promise<ActionResponse>;
}

export { AnotherAdminNeededException, AuthenticationException, AwaitingAccessException, BadRequestException, BlockedException, DomainInvalidOrTakenException, DomainNotFoundException, FeatureDisabledException, FilteredOutException, InternalErrorException, InvalidLinkException, InvalidPathException, InvalidURLException, NoDefaultDomainFoundException, NotFoundException, PathTakenException, PathTooShortException, PermissionsDeniedException, PunyshortClient, PunyshortException, WorkspaceSlugInvalidException, WorkspaceTakenException };
export type { ActionResponse, AddDomainRequest, AppInfo, CountryStats, CreateAccessToken, CreateAccessTokenRequest, CreateDomainRequest, CreateWorkspaceInvitationRequest, CreateWorkspaceRequest, DateStats, Domain, EditUserRequest, EditWorkspaceUserRequest, Exception, Filters, FollowLink, FollowLinkRequest, List, OperatingSystemStats, PaginatedResponse, PaginationData, Session, ShortenLink, ShortenLinkActionResponse, ShortenLinkCompactStats, ShortenLinkFilters, ShortenLinkRequest, ShortenLinkShortStats, ShortenLinkType, Stats, User, Workspace, WorkspaceUser };
