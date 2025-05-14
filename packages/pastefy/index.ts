import { BaseClient } from '@interaapps/base-client';
export * from './exceptions'
import * as exceptions from "./exceptions";
import {CreatePasteRequest, EditPasteRequest, Paste} from "./types/paste";
import {CreateFolderRequest, Folder} from "./types/folder";
import {EditUser, User, UserAsAdmin, UserOverview} from "./types/user";
import {Tag} from "./types/tags";
import {Filters, PasteFilters} from "./types/general";
import {ApiKey} from "./types/keys";

export * from './types/paste'
export * from './types/user'
export * from './types/tags'
export * from './types/folder'
export * from './types/general'

export class PastefyClient extends BaseClient {
    constructor(apiToken: string|undefined = undefined, baseURL: string = 'https://pastefy.app') {
        super(`${baseURL}/api/v2`);
        this.registeredExceptions = exceptions
        if (apiToken) this.setBearerToken(apiToken)
    }

    setApiToken(token: string) {
        this.setBearerToken(token)
        return this;
    }

    async createPaste(paste: CreatePasteRequest) {
        return (await this.post('/paste', paste)).data.paste as Paste
    }

    async editPaste(id: string, paste: EditPasteRequest) {
        await this.put(`/paste/${id}`, paste)
    }

    async getPastes(query: PasteFilters) {
        return (await this.get(`/paste`, {params: query})).data as Paste
    }
    async getPaste(id: string, query: {from_frontend?: boolean} = {}) {
        return (await this.get(`/paste/${id}`, {params: query})).data as Paste
    }

    async deletePaste(id: string) {
        await this.delete(`/paste/${id}`)
    }

    async starPaste(id: string) {
        await this.post(`/paste/${id}/star`)
    }

    async unstarPaste(id: string) {
        await this.delete(`/paste/${id}/star`)
    }

    async getPublicPastes(query: PasteFilters = {}) {
        return (await this.get(`/public-pastes`, {params: query})).data as Paste[]
    }

    async getPublicTrendingPastes(query: PasteFilters & {trending?: boolean} = {}) {
        return (await this.get(`/public-pastes/trending`, {params: query})).data as Paste[]
    }
    async getLatestPublicPastes(query: PasteFilters = {}) {
        return (await this.get(`/public-pastes/latest`, {params: query})).data as Paste[]
    }

    async getPasteRaw(id: string, query: {part?: string} = {}) {
        return (await this.get(`/paste/${id}/raw`, {params: query})).data as string
    }

    async createFolder(folder: CreateFolderRequest) {
        return (await this.post('/folder', folder)).data.folder as Folder
    }
    async getFolder(id: string, query: {
        hide_children?: boolean
    } = {}) {
        return (await this.get(`/folder/${id}`)).data as Folder
    }

    async getFolders(query: Filters = {}) {
        return (await this.get(`/folder`, {params: query})).data as Folder[]
    }

    async getPublicUser(id: string) {
        return (await this.get(`/public/user/${id}`)).data as UserAsAdmin
    }

    async getUser(id: string) {
        return (await this.get(`/admin/users/${id}`)).data as UserAsAdmin
    }

    async deleteUser(id: string) {
        await this.delete(`/admin/users/${id}`)
    }

    async editUser(id: string, user: EditUser) {
        await this.put(`/admin/users/${id}`, user)
    }

    async getUsers(username: string) {
        return (await this.get(`/admin/users`)).data as UserAsAdmin[]
    }

    async getTags(query: Filters = {}) {
        return (await this.get(`/tags`)).data as Tag[]
    }

    async getTag(id: string) {
        return (await this.get(`/tags/${id}`)).data as Tag
    }

    async createApiKey() {
        return (await this.post(`/user/keys`)).data as ApiKey
    }
    async getApiKeys() {
        return (await this.get(`/user/keys`)).data as string[]
    }
    async deleteApiKey(id: string) {
        await this.delete(`/user/keys/${id}`)
    }

    async getCurrentUser() {
        return (await this.get(`/user`)).data as User
    }

    async getUserOverview() {
        return (await this.get(`/user/overview`)).data as UserOverview
    }

    async getUserPastes(query: PasteFilters = {}) {
        return (await this.get(`/user/pastes`, {params: query})).data as Paste[]
    }

    async getStarredPastes(query: PasteFilters = {}) {
        return (await this.get(`/user/starred-pastes`, {params: query})).data as Paste[]
    }

    async getUserFolders(query: Record<string, any> = {}) {
        return (await this.get(`/user/folders`, {params: query})).data as Folder[]
    }
}