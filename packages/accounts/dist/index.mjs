import { BaseClient } from '@interaapps/base-client';
import * as exceptions from './exceptions.mjs';
export { AccountNotGrantedApp, AlreadyLinked, Authentication, AuthenticationInvalid, ChallengeFailed, HTTP, InteraAppsAccountsException, InternalError, InvalidRequest, NamespacePermissionsDenied, NotFound, PermissionsDenied, PrivacyPoliciesNotChecked, TokenExpired } from './exceptions.mjs';
export { InteraAppsOAuth2Client, InteraAppsOAuth2URLBuilder } from './oauth2Client.mjs';

class AccountsClient extends BaseClient {
    constructor(apiToken = undefined, baseURL = 'https://accounts.interaapps.de') {
        super(`${baseURL}/api/v2`);
        // @ts-ignore
        this.registeredExceptions = exceptions;
        if (apiToken)
            this.setBearerToken(apiToken);
    }
    setApiToken(token) {
        this.setBearerToken(token);
        return this;
    }
    /**
     * Do not use this in the backend. This will fail.
     */
    async login(request) {
        return (await this.post('/auth/login', request)).data;
    }
    /**
     * Do not use this in the backend. This will fail.
     */
    async register(request) {
        return (await this.post('/auth/register', request)).data;
    }
    async resetPassword(request) {
        return (await this.post('/auth/reset_password', request)).data;
    }
    async confirmResetPassword(key, request) {
        return (await this.post(`/auth/reset_password/${key}`, request)).data;
    }
    async getCurrentUser() {
        return (await this.get('/user')).data;
    }
    async editUser(request) {
        return (await this.put('/user', request)).data;
    }
    async getContacts() {
        return (await this.get('/contacts')).data;
    }
    async createContact(request) {
        return (await this.post('/contacts', request)).data;
    }
    async acceptContactRequest(id) {
        await this.get(`/contacts/requests/${id}/accept`);
    }
    async removeContact(id) {
        await this.delete(`/contacts/${id}`);
    }
    async getAuthKeys() {
        return (await this.get('/authkeys')).data;
    }
    async deleteAuthKey(key) {
        await this.delete(`/authkeys/${key}`);
    }
    async createProject(request) {
        return (await this.post('/projects', request)).data;
    }
    async getProjects() {
        return (await this.get('/projects')).data;
    }
    async getProject(id) {
        return (await this.get(`/projects/${id}`)).data;
    }
    async editProject(id, request) {
        await this.put(`/projects/${id}`, request);
    }
    async deleteProject(id) {
        await this.delete(`/projects/${id}`);
    }
    // Project Apps
    async createProjectApp(projectId, request) {
        await this.post(`/projects/${projectId}/apps`, request);
    }
    async getProjectApps(projectId) {
        return (await this.get(`/projects/${projectId}/apps`)).data;
    }
    // OAuth2 Apps
    async getOAuth2App(id) {
        return (await this.get(`/projects/apps/oauth2/${id}`)).data;
    }
    async editOAuth2App(id, request) {
        await this.put(`/projects/apps/oauth2/${id}`, request);
    }
    async deleteOAuth2App(id) {
        await this.delete(`/projects/apps/oauth2/${id}`);
    }
    // OAuth2 Authorized Apps
    async getAuthorizedApps() {
        return (await this.get('/authorization/oauth2/authorized_apps')).data;
    }
    async getKeyFor(id) {
        return (await this.get(`/oauth2/external/${id}`, {
            headers: {
                Accept: 'text/plain'
            }
        })).data.res;
    }
}

export { AccountsClient };
//# sourceMappingURL=index.mjs.map
