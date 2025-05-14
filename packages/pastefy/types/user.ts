import {Paste} from "./paste";
import {Folder} from "./folder";

export type UserType = 'ADMIN' | 'USER' | 'BLOCKED' | 'AWAITING_ACCESS'
export type User = {
    logged_in: boolean
    id: string
    name: string
    display_name: string
    color: string
    profile_picture: string
    auth_type: string
    auth_types: string[]
    type: UserType
}
export type PublicUser = {
    id: string
    name: string
    display_name: string
    avatar: string
}

export type UserAsAdmin = {
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

export type EditUser = {
    name: string;
    unique_name?: string;
    type?: UserType
}

export type UserOverview = {
    pastes: Paste[]
    folders: Folder[]
}