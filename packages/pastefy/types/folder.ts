import type { Paste } from './paste.ts'

export type Folder = {
    exists?: boolean
    id: string
    name: string
    user_id?: string
    children?: Folder[]
    pastes?: Paste[]
    created: string
}

export type CreateFolderRequest = {
    name: string
    parent?: string
}