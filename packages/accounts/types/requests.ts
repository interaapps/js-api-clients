export type RegisterRequest = {
    name: string;
    mail: string;
    password: string;
    privacy_policies_accepted: boolean;
    challenge?: any;
    profile_picture?: string;
    scopes?: any[];
};

export type LoginRequest = {
    name: string;
    password: string;
    scopes?: any[];
    expiry?: number | null;
};

export type ResetPasswordRequest = {
    password: string;
};

export type CreatePasswordResetRequest = {
    name: string;
};

export type EditUserRequest = {
    favorite_color?: string;
    full_name?: string;
    description?: string;
    birthday?: string;
};

export type EditProjectRequest = {
    name: string;
};

export type CreateProjectRequest = {
    name: string;
};

export type ProjectAppRequest = {
    name: string;
    type: string;
    url: string;
};

export type EditOAuth2AppRequest = {
    picture?: string;
    name?: string;
    redirect_url?: string;
    urls?: any[];
};

export type OAuth2AppRequest = {
    client_id: string;
    client_secret: string;
};

export type OAuth2AccessTokenRequest = OAuth2AppRequest & {
    code: string;
};

export type OAuth2SetEASRequest = OAuth2AppRequest & {
    url: string;
};

export type OAuth2RevokeRequest = {
    token: string;
};

export type CreateContactRequest = {
    name: string;
};

export type FindUserRequest = {
    key?: string;
    userkey?: string;
    query?: string;
};

export type GetUserInformationRequest = {
    key?: string;
    userkey?: string;
};

export type IsFriendRequest = {
    key?: string;
    userkey?: string;
    name?: string;
};

export type AuthenticationVerificationRequest = {
    data?: any;
};