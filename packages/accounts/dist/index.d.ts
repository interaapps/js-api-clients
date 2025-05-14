import { BaseClient } from '@interaapps/base-client';

declare class InteraAppsAccountsException extends Error {
    data: any;
    constructor(message: string, data: any);
}
declare class AlreadyLinked extends InteraAppsAccountsException {
    constructor(data: any);
}
declare class AccountNotGrantedApp extends InteraAppsAccountsException {
    constructor(data: any);
}
declare class Authentication extends InteraAppsAccountsException {
    constructor(data: any);
}
declare class AuthenticationInvalid extends InteraAppsAccountsException {
    constructor(data: any);
}
declare class ChallengeFailed extends InteraAppsAccountsException {
    constructor(data: any);
}
declare class HTTP extends InteraAppsAccountsException {
    status: number;
    constructor(status: number, message: string, data: any);
}
declare class InternalError extends InteraAppsAccountsException {
    constructor(data: any);
}
declare class InvalidRequest extends InteraAppsAccountsException {
    constructor(data: any);
}
declare class NamespacePermissionsDenied extends InteraAppsAccountsException {
    constructor(data: any);
}
declare class NotFound extends InteraAppsAccountsException {
    constructor(data: any);
}
declare class PermissionsDenied extends InteraAppsAccountsException {
    constructor(data: any);
}
declare class PrivacyPoliciesNotChecked extends InteraAppsAccountsException {
    constructor(data: any);
}
declare class TokenExpired extends InteraAppsAccountsException {
    constructor(data: any);
}

type RegisterRequest = {
    name: string;
    mail: string;
    password: string;
    privacy_policies_accepted: boolean;
    challenge?: any;
    profile_picture?: string;
    scopes?: any[];
};
type LoginRequest = {
    name: string;
    password: string;
    scopes?: any[];
    expiry?: number | null;
};
type ResetPasswordRequest = {
    password: string;
};
type CreatePasswordResetRequest = {
    name: string;
};
type EditUserRequest = {
    favorite_color?: string;
    full_name?: string;
    description?: string;
    birthday?: string;
};
type EditProjectRequest = {
    name: string;
};
type CreateProjectRequest = {
    name: string;
};
type ProjectAppRequest = {
    name: string;
    type: string;
    url: string;
};
type EditOAuth2AppRequest = {
    picture?: string;
    name?: string;
    redirect_url?: string;
    urls?: any[];
};
type OAuth2AppRequest = {
    client_id: string;
    client_secret: string;
};
type OAuth2AccessTokenRequest = OAuth2AppRequest & {
    code: string;
};
type OAuth2SetEASRequest = OAuth2AppRequest & {
    url: string;
};
type OAuth2RevokeRequest = {
    token: string;
};
type CreateContactRequest = {
    name: string;
};
type FindUserRequest = {
    key?: string;
    userkey?: string;
    query?: string;
};
type GetUserInformationRequest = {
    key?: string;
    userkey?: string;
};
type IsFriendRequest = {
    key?: string;
    userkey?: string;
    name?: string;
};
type AuthenticationVerificationRequest = {
    data?: any;
};

type Action = {
    success: boolean;
};
type List<T> = Action & {
    data: T[];
};
type User = Action & {
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
type Namespace = Action & {
    name: string;
    display_name?: string;
    domain?: string;
    picture?: string;
};
type AuthKey = Action & {
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
type OAuth2App = Action & {
    id: string;
    picture: string;
    name: string;
    namespace?: string;
    default_redirect_url?: string;
    urls?: any;
    secret?: string;
    code_count?: number;
};
type OAuth2AuthorizedApps = Action & {
    app: OAuth2App;
    permissions: string[];
};
type Project = Action & {
    id: number;
    name: string;
    image: string;
    oauth_apps?: OAuth2App[];
};
type CreateProjectApp = Action & {
    id: string;
    name: string;
    picture: string;
    type: 'OAUTH2' | 'IAAUTH';
};
type OAuth2TokenExchange = {
    access_token: string;
    refresh_token: string;
    scopes: string;
    scope_list: string[];
    token_type: string;
};

declare class InteraAppsOAuth2URLBuilder {
    private clientId;
    private baseURL;
    private scopes;
    private redirectUri;
    private state;
    private responseType;
    constructor(clientId: string, baseURL?: string);
    setScopes(scopes: string[]): this;
    getScopes(): string[];
    setResponseType(responseType: 'token' | 'code'): this;
    getResponseType(): string;
    setRedirectUri(redirectUri: string): this;
    getRedirectUri(): string;
    setState(state: string): this;
    getState(): string;
    getClientId(): string;
    build(): string;
}
declare class InteraAppsOAuth2Client extends BaseClient {
    private clientId;
    private clientSecret;
    private scopes;
    private baseURL;
    constructor(clientId: string, clientSecret: string | undefined, scopes?: string[], baseURL?: string);
    checkScopes(scopes: string[]): boolean;
    setScopes(scopes: string[]): this;
    getScopes(): string[];
    exchangeToken(code: string): Promise<OAuth2TokenExchange>;
    exchangeTokenAndGetClient(code: string): Promise<AccountsClient>;
    urlBuilder(): InteraAppsOAuth2URLBuilder;
}

declare class AccountsClient extends BaseClient {
    constructor(apiToken?: string | undefined, baseURL?: string);
    setApiToken(token: string): this;
    /**
     * Do not use this in the backend. This will fail.
     */
    login(request: LoginRequest): Promise<AuthKey>;
    /**
     * Do not use this in the backend. This will fail.
     */
    register(request: RegisterRequest): Promise<AuthKey>;
    resetPassword(request: CreatePasswordResetRequest): Promise<any>;
    confirmResetPassword(key: string, request: ResetPasswordRequest): Promise<any>;
    getCurrentUser(): Promise<User>;
    editUser(request: EditUserRequest): Promise<any>;
    getContacts(): Promise<List<User>>;
    createContact(request: CreateContactRequest): Promise<any>;
    acceptContactRequest(id: number): Promise<void>;
    removeContact(id: number): Promise<void>;
    getAuthKeys(): Promise<List<AuthKey>>;
    deleteAuthKey(key: string): Promise<void>;
    createProject(request: CreateProjectRequest): Promise<Project>;
    getProjects(): Promise<List<Project>>;
    getProject(id: number): Promise<Project>;
    editProject(id: number, request: EditProjectRequest): Promise<void>;
    deleteProject(id: number): Promise<void>;
    createProjectApp(projectId: number, request: ProjectAppRequest): Promise<void>;
    getProjectApps(projectId: number): Promise<List<CreateProjectApp>>;
    getOAuth2App(id: string): Promise<OAuth2App>;
    editOAuth2App(id: string, request: EditOAuth2AppRequest): Promise<void>;
    deleteOAuth2App(id: string): Promise<void>;
    getAuthorizedApps(): Promise<List<OAuth2AuthorizedApps>>;
    getKeyFor(id: 'pastefy' | string): Promise<any>;
}

export { AccountNotGrantedApp, AccountsClient, AlreadyLinked, Authentication, AuthenticationInvalid, ChallengeFailed, HTTP, InteraAppsAccountsException, InteraAppsOAuth2Client, InteraAppsOAuth2URLBuilder, InternalError, InvalidRequest, NamespacePermissionsDenied, NotFound, PermissionsDenied, PrivacyPoliciesNotChecked, TokenExpired };
export type { AuthenticationVerificationRequest, CreateContactRequest, CreatePasswordResetRequest, CreateProjectRequest, EditOAuth2AppRequest, EditProjectRequest, EditUserRequest, FindUserRequest, GetUserInformationRequest, IsFriendRequest, LoginRequest, OAuth2AccessTokenRequest, OAuth2AppRequest, OAuth2RevokeRequest, OAuth2SetEASRequest, ProjectAppRequest, RegisterRequest, ResetPasswordRequest };
