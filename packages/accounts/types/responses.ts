export type Action = {
    success: boolean;
};

export type Exception = Action & {
    error: boolean;
    exception: string;
    message: string;
};

export type List<T> = Action & {
    data: T[];
};

export type Redirect = Action & {
    url: string;
};

export type UserLoginPreview = Action & {
    profile_picture: string;
};

export type AuthenticationMethod = Action & {
    id: number;
    type: string;
    data: any;
};

export type User = Action & {
    id: number;
    name: string;
    full_name: string;
    mail: string;
    mail_verified: boolean;
    birthday: string;
    favorite_color: string;
    description: string;
    profile_picture: string;
    namespace?: Namespace;
};

export type Namespace = Action & {
    name: string;
    display_name?: string;
    domain?: string;
    picture?: string;
};

export type AuthKey = Action & {
    id: number;
    user_id: number;
    key?: string;
    scopes: any;
    user_agent?: {
        browser: string;
        operating_system: string;
    };
    locked: boolean;
};

export type Register = Action & {
    auth_key: AuthKey;
};

export type Login = Action & {
    auth_key: AuthKey;
    authentication_required: boolean;
};

export type AccountLink = Action & {
    name: string;
    mail: string;
    platform: string;
    profile_picture: string;
};

export type IAAuthService = Action & {
    id: number;
    name: string;
    image: string;
    redirect_url?: string;
};

export type IAAuthServicePermissionGrant = Action & {
    redirect_url: string;
};

export type OAuth2Token = Action & {
    access_token: string;
    refresh_token: string;
    scopes: string;
    scope_list: string[];
    id_token: string;
    token_type: string;
};

export type OAuth2App = Action & {
    id: string;
    picture: string;
    name: string;
    namespace?: string;
    default_redirect_url?: string;
    urls?: any;
    secret?: string;
    code_count?: number;
};

export type OAuth2AuthorizedApps = Action & {
    app: OAuth2App;
    permissions: string[];
};

export type OAuth2GrantAccess = Action & {
    code: string;
};

export type OAuth2GrantAccessImplicit = Action & {
    access_token: string;
};

export type ExternalResources = Action & {
    res: string;
};

export type Project = Action & {
    id: number;
    name: string;
    image: string;
    oauth_apps?: OAuth2App[];
};

export type CreateProjectApp = Action & {
    id: string;
    name: string;
    picture: string;
    type: 'OAUTH2' | 'IAAUTH';
};

export type OAuth2TokenExchange = {
    access_token: string;
    refresh_token: string;
    scopes: string;
    scope_list: string[];
    token_type: string;
}