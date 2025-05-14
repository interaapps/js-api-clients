import { BaseClient } from '@interaapps/base-client';
export * from './exceptions'
import * as exceptions from "./exceptions";

export * from './types/requests'
export * from './types/requests'
export * from './oauth2Client'

import {
    LoginRequest,
    RegisterRequest,
    EditUserRequest,
    CreateContactRequest,
    CreatePasswordResetRequest,
    ResetPasswordRequest,
    EditOAuth2AppRequest,
    ProjectAppRequest,
    CreateProjectRequest,
    EditProjectRequest
} from './types/requests';

import {AuthKey, CreateProjectApp, List, OAuth2App, OAuth2AuthorizedApps, Project, User} from "./types/responses";

export class AccountsClient extends BaseClient {
    constructor(apiToken: string|undefined = undefined, baseURL: string = 'https://accounts.interaapps.de') {
        super(`${baseURL}/api/v2`);
        // @ts-ignore
        this.registeredExceptions = exceptions
        if (apiToken) this.setBearerToken(apiToken)
    }

    setApiToken(token: string) {
        this.setBearerToken(token)
        return this;
    }

    /**
     * Do not use this in the backend. This will fail.
     */
    async login(request: LoginRequest): Promise<AuthKey> {
        return (await this.post('/auth/login', request)).data as AuthKey;
    }

    /**
     * Do not use this in the backend. This will fail.
     */
    async register(request: RegisterRequest): Promise<AuthKey> {
        return (await this.post('/auth/register', request)).data as AuthKey;
    }

    async resetPassword(request: CreatePasswordResetRequest) {
        return (await this.post('/auth/reset_password', request)).data;
    }

    async confirmResetPassword(key: string, request: ResetPasswordRequest) {
        return (await this.post(`/auth/reset_password/${key}`, request)).data;
    }

    async getCurrentUser() {
        return (await this.get('/user')).data as User;
    }

    async editUser(request: EditUserRequest) {
        return (await this.put('/user', request)).data;
    }

    async getContacts() {
        return (await this.get('/contacts')).data as List<User>;
    }

    async createContact(request: CreateContactRequest) {
        return (await this.post('/contacts', request)).data;
    }

    async acceptContactRequest(id: number){
        await this.get(`/contacts/requests/${id}/accept`);
    }

    async removeContact(id: number) {
        await this.delete(`/contacts/${id}`);
    }

    async getAuthKeys() {
        return (await this.get('/authkeys')).data as List<AuthKey>;
    }

    async deleteAuthKey(key: string) {
        await this.delete(`/authkeys/${key}`);
    }

    async createProject(request: CreateProjectRequest) {
        return (await this.post('/projects', request)).data as Project;
    }

    async getProjects() {
        return (await this.get('/projects')).data as List<Project>;
    }

    async getProject(id: number){
        return (await this.get(`/projects/${id}`)).data as Project;
    }

    async editProject(id: number, request: EditProjectRequest) {
        await this.put(`/projects/${id}`, request);
    }

    async deleteProject(id: number) {
        await this.delete(`/projects/${id}`);
    }

    // Project Apps
    async createProjectApp(projectId: number, request: ProjectAppRequest) {
        await this.post(`/projects/${projectId}/apps`, request);
    }

    async getProjectApps(projectId: number) {
        return (await this.get(`/projects/${projectId}/apps`)).data as List<CreateProjectApp>;
    }

    // OAuth2 Apps
    async getOAuth2App(id: string) {
        return (await this.get(`/projects/apps/oauth2/${id}`)).data as OAuth2App;
    }

    async editOAuth2App(id: string, request: EditOAuth2AppRequest) {
        await this.put(`/projects/apps/oauth2/${id}`, request);
    }

    async deleteOAuth2App(id: string) {
        await this.delete(`/projects/apps/oauth2/${id}`);
    }

    // OAuth2 Authorized Apps
    async getAuthorizedApps() {
        return (await this.get('/authorization/oauth2/authorized_apps')).data as List<OAuth2AuthorizedApps>;
    }

    async getKeyFor(id: 'pastefy' | string) {
        return (await this.get(`/oauth2/external/${id}`, {
            headers: {
                Accept: 'text/plain'
            }
        })).data.res
    }
}