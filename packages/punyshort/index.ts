import { BaseClient } from '@interaapps/base-client';
export * from './exceptions'
import * as exceptions from "./exceptions";

export * from './types/requests'
export * from './types/responses'

import {
    EditUserRequest,
    CreateAccessTokenRequest,
    CreateDomainRequest,
    FollowLinkRequest,
    ShortenLinkRequest,
    AddDomainRequest,
    CreateWorkspaceInvitationRequest,
    CreateWorkspaceRequest,
    EditWorkspaceUserRequest, ShortenLinkFilters, Filters
} from './types/requests';

import {
    ActionResponse,
    PaginatedResponse,
    WorkspaceUser,
    Domain,
    ShortenLink,
    Workspace,
    CreateAccessToken,
    User, DateStats, CountryStats, OperatingSystemStats
} from './types/responses';

export class PunyshortClient extends BaseClient {
    constructor(apiToken: string|undefined = undefined, baseURL: string = 'https://api.punyshort.intera.dev') {
        super(`${baseURL}/v1`);
        this.registeredExceptions = exceptions
        if (apiToken) this.setBearerToken(apiToken)
    }

    setApiToken(token: string) {
        this.setBearerToken(token)
        return this;
    }

    // User
    async getUser(): Promise<User> {
        return (await this.get('/user')).data as User;
    }
    async editUser(id: string, req: EditUserRequest): Promise<ActionResponse> {
        return (await this.put(`/admin/users/${id}`, req)).data as ActionResponse;
    }

    // Access Token
    async createAccessToken(req: CreateAccessTokenRequest): Promise<CreateAccessToken> {
        return (await this.post('/access-tokens', req)).data as CreateAccessToken;
    }
    async getAccessTokens(): Promise<string[]> {
        return (await this.get('/access-tokens')).data as string[];
    }
    async deleteAccessToken(key: string): Promise<ActionResponse> {
        return (await this.delete(`/access-tokens/${key}`)).data as ActionResponse;
    }

    async getDomains(): Promise<PaginatedResponse<Domain>> {
        return (await this.get('/domains')).data as PaginatedResponse<Domain>;
    }
    async createDomain(req: CreateDomainRequest): Promise<Domain> {
        return (await this.post('/domains', req)).data as Domain;
    }
    async deleteDomain(id: string): Promise<ActionResponse> {
        return (await this.delete(`/domains/${id}`)).data as ActionResponse;
    }

    async shortenLink(req: ShortenLinkRequest): Promise<ShortenLink> {
        console.log(req)
        return (await this.post('/shorten-links', req)).data as ShortenLink;
    }
    async getShortenLinks(params: ShortenLinkFilters = {}): Promise<PaginatedResponse<ShortenLink>> {
        return (await this.get('/shorten-links', {params})).data as PaginatedResponse<ShortenLink>;
    }
    async getShortenLink(id: string): Promise<ShortenLink> {
        return (await this.get(`/shorten-links/${id}`)).data as ShortenLink;
    }
    async editShortenLink(id: string, req: ShortenLinkRequest): Promise<ActionResponse> {
        return (await this.put(`/shorten-links/${id}`, req)).data as ActionResponse;
    }
    async deleteShortenLink(id: string): Promise<ActionResponse> {
        return (await this.delete(`/shorten-links/${id}`)).data as ActionResponse;
    }


    async getShortenLinkStatsTotal(id: string) {
        return (await this.get(`/shorten-links/${id}/stats/total`)).data as number;
    }
    async getShortenLinkDateStats(id: string, params: Filters = {}) {
        return (await this.get(`/shorten-links/${id}/stats/dates`, {params})).data as PaginatedResponse<DateStats>;
    }
    async getShortenLinkCountryStats(id: string, params: Filters = {}) {
        return (await this.get(`/shorten-links/${id}/stats/countries`, {params})).data as PaginatedResponse<CountryStats>;
    }
    async getShortenLinkOperatingSystemStats(id: string, params: Filters = {}) {
        return (await this.get(`/shorten-links/${id}/stats/operating-systems`, {params})).data as PaginatedResponse<OperatingSystemStats>;
    }

    async followLink(req: FollowLinkRequest): Promise<ShortenLink> {
        return (await this.post('/follow', req)).data as ShortenLink;
    }

    async getWorkspaces(params: Filters = {}): Promise<PaginatedResponse<Workspace>> {
        return (await this.get('/workspaces', {params})).data as PaginatedResponse<Workspace>;
    }
    async createWorkspace(req: CreateWorkspaceRequest): Promise<Workspace> {
        return (await this.post('/workspaces', req)).data as Workspace;
    }
    async deleteWorkspace(id: string): Promise<ActionResponse> {
        return (await this.delete(`/workspaces/${id}`)).data as ActionResponse;
    }
    async getWorkspace(id: string): Promise<Workspace> {
        return (await this.get(`/workspaces/${id}`)).data as Workspace;
    }

    async getWorkspaceUsers(workspaceId: string, params: Filters = {}): Promise<PaginatedResponse<WorkspaceUser>> {
        return (await this.get(`/workspaces/${workspaceId}/users`, {params})).data as PaginatedResponse<WorkspaceUser>;
    }
    async inviteWorkspaceUser(workspaceId: string, req: CreateWorkspaceInvitationRequest): Promise<ActionResponse> {
        return (await this.post(`/workspaces/${workspaceId}/users`, req)).data as ActionResponse;
    }
    async editWorkspaceUser(workspaceId: string, userId: string, req: EditWorkspaceUserRequest): Promise<ActionResponse> {
        return (await this.put(`/workspaces/${workspaceId}/users/${userId}`, req)).data as ActionResponse;
    }
    async removeWorkspaceUser(workspaceId: string, userId: string): Promise<ActionResponse> {
        return (await this.delete(`/workspaces/${workspaceId}/users/${userId}`)).data as ActionResponse;
    }
    async acceptWorkspaceInvitation(workspaceId: string, userId: string): Promise<ActionResponse> {
        return (await this.post(`/workspaces/${workspaceId}/users/${userId}/accept`)).data as ActionResponse;
    }

    async getWorkspaceDomains(workspaceId: string, params: Filters = {}): Promise<PaginatedResponse<Domain>> {
        return (await this.get(`/workspaces/${workspaceId}/domains`, {params})).data as PaginatedResponse<Domain>;
    }
    async addWorkspaceDomain(workspaceId: string, req: AddDomainRequest): Promise<Domain> {
        return (await this.post(`/workspaces/${workspaceId}/domains`, req)).data as Domain;
    }
    async removeWorkspaceDomain(workspaceId: string, domainId: string): Promise<ActionResponse> {
        return (await this.delete(`/workspaces/${workspaceId}/domains/${domainId}`)).data as ActionResponse;
    }
}