'use strict';

var baseClient = require('@interaapps/base-client');
var exceptions = require('./exceptions.js');

class PunyshortClient extends baseClient.BaseClient {
    constructor(apiToken = undefined, baseURL = 'https://api.punyshort.intera.dev') {
        super(`${baseURL}/v1`);
        this.registeredExceptions = exceptions;
        if (apiToken)
            this.setBearerToken(apiToken);
    }
    setApiToken(token) {
        this.setBearerToken(token);
        return this;
    }
    // User
    async getUser() {
        return (await this.get('/user')).data;
    }
    async editUser(id, req) {
        return (await this.put(`/admin/users/${id}`, req)).data;
    }
    // Access Token
    async createAccessToken(req) {
        return (await this.post('/access-tokens', req)).data;
    }
    async getAccessTokens() {
        return (await this.get('/access-tokens')).data;
    }
    async deleteAccessToken(key) {
        return (await this.delete(`/access-tokens/${key}`)).data;
    }
    async getDomains() {
        return (await this.get('/domains')).data;
    }
    async createDomain(req) {
        return (await this.post('/domains', req)).data;
    }
    async deleteDomain(id) {
        return (await this.delete(`/domains/${id}`)).data;
    }
    async shortenLink(req) {
        console.log(req);
        return (await this.post('/shorten-links', req)).data;
    }
    async getShortenLinks(params = {}) {
        return (await this.get('/shorten-links', { params })).data;
    }
    async getShortenLink(id) {
        return (await this.get(`/shorten-links/${id}`)).data;
    }
    async editShortenLink(id, req) {
        return (await this.put(`/shorten-links/${id}`, req)).data;
    }
    async deleteShortenLink(id) {
        return (await this.delete(`/shorten-links/${id}`)).data;
    }
    async getShortenLinkStatsTotal(id) {
        return (await this.get(`/shorten-links/${id}/stats/total`)).data;
    }
    async getShortenLinkDateStats(id, params = {}) {
        return (await this.get(`/shorten-links/${id}/stats/dates`, { params })).data;
    }
    async getShortenLinkCountryStats(id, params = {}) {
        return (await this.get(`/shorten-links/${id}/stats/countries`, { params })).data;
    }
    async getShortenLinkOperatingSystemStats(id, params = {}) {
        return (await this.get(`/shorten-links/${id}/stats/operating-systems`, { params })).data;
    }
    async followLink(req) {
        return (await this.post('/follow', req)).data;
    }
    async getWorkspaces(params = {}) {
        return (await this.get('/workspaces', { params })).data;
    }
    async createWorkspace(req) {
        return (await this.post('/workspaces', req)).data;
    }
    async deleteWorkspace(id) {
        return (await this.delete(`/workspaces/${id}`)).data;
    }
    async getWorkspace(id) {
        return (await this.get(`/workspaces/${id}`)).data;
    }
    async getWorkspaceUsers(workspaceId, params = {}) {
        return (await this.get(`/workspaces/${workspaceId}/users`, { params })).data;
    }
    async inviteWorkspaceUser(workspaceId, req) {
        return (await this.post(`/workspaces/${workspaceId}/users`, req)).data;
    }
    async editWorkspaceUser(workspaceId, userId, req) {
        return (await this.put(`/workspaces/${workspaceId}/users/${userId}`, req)).data;
    }
    async removeWorkspaceUser(workspaceId, userId) {
        return (await this.delete(`/workspaces/${workspaceId}/users/${userId}`)).data;
    }
    async acceptWorkspaceInvitation(workspaceId, userId) {
        return (await this.post(`/workspaces/${workspaceId}/users/${userId}/accept`)).data;
    }
    async getWorkspaceDomains(workspaceId, params = {}) {
        return (await this.get(`/workspaces/${workspaceId}/domains`, { params })).data;
    }
    async addWorkspaceDomain(workspaceId, req) {
        return (await this.post(`/workspaces/${workspaceId}/domains`, req)).data;
    }
    async removeWorkspaceDomain(workspaceId, domainId) {
        return (await this.delete(`/workspaces/${workspaceId}/domains/${domainId}`)).data;
    }
}

exports.AnotherAdminNeededException = exceptions.AnotherAdminNeededException;
exports.AuthenticationException = exceptions.AuthenticationException;
exports.AwaitingAccessException = exceptions.AwaitingAccessException;
exports.BadRequestException = exceptions.BadRequestException;
exports.BlockedException = exceptions.BlockedException;
exports.DomainInvalidOrTakenException = exceptions.DomainInvalidOrTakenException;
exports.DomainNotFoundException = exceptions.DomainNotFoundException;
exports.FeatureDisabledException = exceptions.FeatureDisabledException;
exports.FilteredOutException = exceptions.FilteredOutException;
exports.InternalErrorException = exceptions.InternalErrorException;
exports.InvalidLinkException = exceptions.InvalidLinkException;
exports.InvalidPathException = exceptions.InvalidPathException;
exports.InvalidURLException = exceptions.InvalidURLException;
exports.NoDefaultDomainFoundException = exceptions.NoDefaultDomainFoundException;
exports.NotFoundException = exceptions.NotFoundException;
exports.PathTakenException = exceptions.PathTakenException;
exports.PathTooShortException = exceptions.PathTooShortException;
exports.PermissionsDeniedException = exceptions.PermissionsDeniedException;
exports.PunyshortException = exceptions.PunyshortException;
exports.WorkspaceSlugInvalidException = exceptions.WorkspaceSlugInvalidException;
exports.WorkspaceTakenException = exceptions.WorkspaceTakenException;
exports.PunyshortClient = PunyshortClient;
//# sourceMappingURL=index.js.map
