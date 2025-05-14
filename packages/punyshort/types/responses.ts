export type PaginationData = {
    total: number;
    page: number;
    limit: number;
};

export type ActionResponse = {
    success: boolean;
};

export type PaginatedResponse<T> = ActionResponse & {
    data: T[];
    pagination: PaginationData;
};

export type List<T> = ActionResponse & {
    data: T[];
};

export type Exception = ActionResponse & {
    exception: string;
    error: boolean;
    exists: boolean;
};

export type User = {
    logged_in: boolean;
    id: string;
    name: string;
    color: string;
    profile_picture: string;
    auth_type: string;
    auth_types: string[];
    type: string; // ggf. genauer typisieren
};

export type Session = ActionResponse & {
    session: string;
};

export type CreateAccessToken = ActionResponse & {
    key: string;
};

export type ShortenLink = {
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

export type ShortenLinkCompactStats = {
    total: number;
    most_visiting_country: string;
    clicks_today: number;
};

export type ShortenLinkActionResponse = ActionResponse;

export type FollowLink = ActionResponse & {
    link: string;
};

export type ShortenLinkShortStats = {
    total_clicks: number;
    most_visited_country: string;
};

export type Domain = {
    id: string;
    name: string;
    dns_type: string;
    dns_settings: any;
    locked: boolean;
    is_public: boolean;
    is_active: boolean;
};

export type WorkspaceUser = {
    id: string;
    name: string;
    unique_name: string;
    email: string;
    avatar: string;
    role: string;
    state: string;
};

export type Workspace = {
    id: string;
    name: string;
    slug: string;
    created_at: string;
    users: WorkspaceUser[];
    domains: Domain[];
};

export type AppInfo = {
    custom_logo: string;
    custom_name: string;
    custom_footer: Record<string, string>;
    encryption_is_default: boolean;
};

export type Stats = {
    created_pastes: number;
    logged_in_pastes: number;
};

export type DateStats = {
    id: number
    count: number
    date: string
    link_id: string
    created_at: string
    updated_at: string
}
export type CountryStats = {
    id: number
    count: number
    country_code: string
    link_id: string
    created_at: string
    updated_at: string
}
export type OperatingSystemStats = {
    id: number
    count: number
    operating_system: string
    link_id: string
    created_at: string
    updated_at: string
}