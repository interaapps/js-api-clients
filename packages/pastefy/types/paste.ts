import type { PublicUser } from './user.ts'

export type PasteType = 'PASTE' | 'MULTI_PASTE'
export type PasteVisibility = 'PUBLIC' | 'PRIVATE' | 'UNLISTED'

export type Paste = {
    id?: string
    content: string
    title: string
    encrypted: boolean
    visibility: PasteVisibility
    raw_url?: string
    type: PasteType
    created_at?: string
    expire_at?: string
    tags?: string[]
    forked_from?: string
    user_id?: string
    folder?: string
    user?: PublicUser
    starred?: boolean

    ai?: boolean
}

export type MultiPastePart = {
    name: string
    contents: string
}


export type EditPasteRequest =  {
    title?: string;
    content?: string;
    encrypted?: boolean;
    folder?: string;
    type?: PasteType;
    tags?: string[];
    visibility?: PasteVisibility;
    expireAt?: string;
}

export type CreatePasteRequest = {
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