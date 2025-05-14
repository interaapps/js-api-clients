import { BaseClient } from '@interaapps/base-client';
import * as exceptions from './exceptions.mjs';
export { AuthenticationException, AwaitingAccessException, BlockedException, FeatureDisabledException, NotFoundException, PastePrivateException, PermissionsDeniedException } from './exceptions.mjs';

class PastefyClient extends BaseClient {
    constructor(apiToken = undefined, baseURL = 'https://pastefy.app') {
        super(`${baseURL}/api/v2`);
        this.registeredExceptions = exceptions;
        if (apiToken)
            this.setBearerToken(apiToken);
    }
    setApiToken(token) {
        this.setBearerToken(token);
        return this;
    }
    async createPaste(paste) {
        return (await this.post('/paste', paste)).data.paste;
    }
    async editPaste(id, paste) {
        await this.put(`/paste/${id}`, paste);
    }
    async getPastes(query) {
        return (await this.get(`/paste`, { params: query })).data;
    }
    async getPaste(id, query = {}) {
        return (await this.get(`/paste/${id}`, { params: query })).data;
    }
    async deletePaste(id) {
        await this.delete(`/paste/${id}`);
    }
    async starPaste(id) {
        await this.post(`/paste/${id}/star`);
    }
    async unstarPaste(id) {
        await this.delete(`/paste/${id}/star`);
    }
    async getPublicPastes(query = {}) {
        return (await this.get(`/public-pastes`, { params: query })).data;
    }
    async getPublicTrendingPastes(query = {}) {
        return (await this.get(`/public-pastes/trending`, { params: query })).data;
    }
    async getLatestPublicPastes(query = {}) {
        return (await this.get(`/public-pastes/latest`, { params: query })).data;
    }
    async getPasteRaw(id, query = {}) {
        return (await this.get(`/paste/${id}/raw`, { params: query })).data;
    }
    async createFolder(folder) {
        return (await this.post('/folder', folder)).data.folder;
    }
    async getFolder(id, query = {}) {
        return (await this.get(`/folder/${id}`)).data;
    }
    async getFolders(query = {}) {
        return (await this.get(`/folder`, { params: query })).data;
    }
    async getPublicUser(id) {
        return (await this.get(`/public/user/${id}`)).data;
    }
    async getUser(id) {
        return (await this.get(`/admin/users/${id}`)).data;
    }
    async deleteUser(id) {
        await this.delete(`/admin/users/${id}`);
    }
    async editUser(id, user) {
        await this.put(`/admin/users/${id}`, user);
    }
    async getUsers(username) {
        return (await this.get(`/admin/users`)).data;
    }
    async getTags(query = {}) {
        return (await this.get(`/tags`)).data;
    }
    async getTag(id) {
        return (await this.get(`/tags/${id}`)).data;
    }
    async createApiKey() {
        return (await this.post(`/user/keys`)).data;
    }
    async getApiKeys() {
        return (await this.get(`/user/keys`)).data;
    }
    async deleteApiKey(id) {
        await this.delete(`/user/keys/${id}`);
    }
    async getCurrentUser() {
        return (await this.get(`/user`)).data;
    }
    async getUserOverview() {
        return (await this.get(`/user/overview`)).data;
    }
    async getUserPastes(query = {}) {
        return (await this.get(`/user/pastes`, { params: query })).data;
    }
    async getStarredPastes(query = {}) {
        return (await this.get(`/user/starred-pastes`, { params: query })).data;
    }
    async getUserFolders(query = {}) {
        return (await this.get(`/user/folders`, { params: query })).data;
    }
}

export { PastefyClient };
//# sourceMappingURL=index.mjs.map
