
export type ShortenLinkType = 'SHORTEN_LINK'

export type EditUserRequest = {
    name: string;
    unique_name: string;
    type: string;
};

export type CreateAccessTokenRequest = {
    type: string;
};

export type CreateDomainRequest = {
    name: string;
    dns_type: string;
    dns_settings: any;
    is_public?: boolean;
};

export type FollowLinkRequest = {
    ip: string;
    user_agent: string;
    referrer: string;
    domain: string;
    path: string;
};

export type ShortenLinkRequest = {
    domain: string;
    path?: string;
    long_link: string;
    type?: ShortenLinkType;
    workspace_id?: string;
    tags?: string[];
};

export type AddDomainRequest = {
    domain_id: string;
};

export type CreateWorkspaceInvitationRequest = {
    email: string;
    role: string;
};

export type CreateWorkspaceRequest = {
    name: string;
    slug: string;
};

export type EditWorkspaceUserRequest = {
    role: string;
};

export type Filters = {
    search?: string;
    page?: number;
    page_size?: number;
    order_by?: string
    order_desc?: string
}

export type ShortenLinkFilters = Filters & {
    filter_domain?: string;
    filter_path?: string;
    filter_tags?: string[];
    filter_userId?: string[];
    filter_fullShortenUrl?: string[];
    filter_workspaceId?: string;
    filter_type?: string;
}