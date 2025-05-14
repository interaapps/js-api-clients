import { BaseClient } from '@interaapps/base-client';

declare class AuthenticationException extends Error {
    constructor(data: any);
}
declare class AwaitingAccessException extends Error {
    constructor(data: any);
}
declare class BlockedException extends Error {
    constructor(data: any);
}
declare class FeatureDisabledException extends Error {
    constructor(data: any);
}
declare class NotFoundException extends Error {
    constructor(data: any);
}
declare class PastePrivateException extends Error {
    constructor(data: any);
}
declare class PermissionsDeniedException extends Error {
    constructor(data: any);
}

type Folder = {
    exists?: boolean;
    id: string;
    name: string;
    user_id?: string;
    children?: Folder[];
    pastes?: Paste[];
    created: string;
};
type CreateFolderRequest = {
    name: string;
    parent?: string;
};

type UserType = 'ADMIN' | 'USER' | 'BLOCKED' | 'AWAITING_ACCESS';
type User = {
    logged_in: boolean;
    id: string;
    name: string;
    display_name: string;
    color: string;
    profile_picture: string;
    auth_type: string;
    auth_types: string[];
    type: UserType;
};
type PublicUser = {
    id: string;
    name: string;
    display_name: string;
    avatar: string;
};
type UserAsAdmin = {
    id: string;
    name?: string;
    uniqueName?: string;
    eMail?: string;
    avatar?: string;
    authId?: string;
    authProvider?: string;
    type?: UserType;
    createdAt?: string;
    updatedAt?: string;
};
type EditUser = {
    name: string;
    unique_name?: string;
    type?: UserType;
};
type UserOverview = {
    pastes: Paste[];
    folders: Folder[];
};

type PasteType = 'PASTE' | 'MULTI_PASTE';
type PasteVisibility = 'PUBLIC' | 'PRIVATE' | 'UNLISTED';
type Paste = {
    id?: string;
    content: string;
    title: string;
    encrypted: boolean;
    visibility: PasteVisibility;
    raw_url?: string;
    type: PasteType;
    created_at?: string;
    expire_at?: string;
    tags?: string[];
    forked_from?: string;
    user_id?: string;
    folder?: string;
    user?: PublicUser;
    starred?: boolean;
    ai?: boolean;
};
type MultiPastePart = {
    name: string;
    contents: string;
};
type EditPasteRequest = {
    title?: string;
    content?: string;
    encrypted?: boolean;
    folder?: string;
    type?: PasteType;
    tags?: string[];
    visibility?: PasteVisibility;
    expireAt?: string;
};
type CreatePasteRequest = {
    title?: string;
    content: string;
    encrypted?: boolean;
    folder?: string;
    expireAt?: string;
    forkedFrom?: string;
    tags?: string[] | undefined | null;
    visibility?: PasteVisibility;
    type?: PasteType;
    /**
     * Adds tags via AI
     */
    ai?: boolean;
};

type Tag = {
    tag: string;
    paste_count: number;
    display_name?: string;
    image_url?: string;
    description?: string;
    website?: string;
    icon?: string;
};

type Filters = {
    search?: string;
    page_limit?: number;
    page?: number;
    filter?: Record<string, string | number | boolean>;
    [key: string]: any;
};
type PasteFilters = {
    /**
     * Seperated by comma (,)
     */
    filter_tags?: string;
    user_id?: string;
    filter?: {
        key?: string;
        userId?: string;
        forkedFrom?: string;
        type?: PasteType;
        visibility?: PasteVisibility;
    };
} & Filters;

type ApiKey = {
    key: string;
};

declare class PastefyClient extends BaseClient {
    constructor(apiToken?: string | undefined, baseURL?: string);
    setApiToken(token: string): this;
    createPaste(paste: CreatePasteRequest): Promise<Paste>;
    editPaste(id: string, paste: EditPasteRequest): Promise<void>;
    getPastes(query: PasteFilters): Promise<Paste>;
    getPaste(id: string, query?: {
        from_frontend?: boolean;
    }): Promise<Paste>;
    deletePaste(id: string): Promise<void>;
    starPaste(id: string): Promise<void>;
    unstarPaste(id: string): Promise<void>;
    getPublicPastes(query?: PasteFilters): Promise<Paste[]>;
    getPublicTrendingPastes(query?: PasteFilters & {
        trending?: boolean;
    }): Promise<Paste[]>;
    getLatestPublicPastes(query?: PasteFilters): Promise<Paste[]>;
    getPasteRaw(id: string, query?: {
        part?: string;
    }): Promise<string>;
    createFolder(folder: CreateFolderRequest): Promise<Folder>;
    getFolder(id: string, query?: {
        hide_children?: boolean;
    }): Promise<Folder>;
    getFolders(query?: Filters): Promise<Folder[]>;
    getPublicUser(id: string): Promise<UserAsAdmin>;
    getUser(id: string): Promise<UserAsAdmin>;
    deleteUser(id: string): Promise<void>;
    editUser(id: string, user: EditUser): Promise<void>;
    getUsers(username: string): Promise<UserAsAdmin[]>;
    getTags(query?: Filters): Promise<Tag[]>;
    getTag(id: string): Promise<Tag>;
    createApiKey(): Promise<ApiKey>;
    getApiKeys(): Promise<string[]>;
    deleteApiKey(id: string): Promise<void>;
    getCurrentUser(): Promise<User>;
    getUserOverview(): Promise<UserOverview>;
    getUserPastes(query?: PasteFilters): Promise<Paste[]>;
    getStarredPastes(query?: PasteFilters): Promise<Paste[]>;
    getUserFolders(query?: Record<string, any>): Promise<Folder[]>;
}

export { AuthenticationException, AwaitingAccessException, BlockedException, FeatureDisabledException, NotFoundException, PastePrivateException, PastefyClient, PermissionsDeniedException };
export type { CreateFolderRequest, CreatePasteRequest, EditPasteRequest, EditUser, Filters, Folder, MultiPastePart, Paste, PasteFilters, PasteType, PasteVisibility, PublicUser, Tag, User, UserAsAdmin, UserOverview, UserType };
