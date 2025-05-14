'use strict';

var baseClient = require('@interaapps/base-client');
var exceptions = require('./exceptions.js');
var index = require('./index.js');

class InteraAppsOAuth2URLBuilder {
    clientId;
    baseURL;
    scopes = [];
    redirectUri = '';
    state = '';
    responseType = 'code';
    constructor(clientId, baseURL = 'https://accounts.interaapps.de') {
        this.clientId = clientId;
        this.baseURL = baseURL;
    }
    setScopes(scopes) {
        this.scopes = scopes;
        return this;
    }
    getScopes() {
        return this.scopes;
    }
    setResponseType(responseType) {
        this.responseType = responseType;
        return this;
    }
    getResponseType() {
        return this.responseType;
    }
    setRedirectUri(redirectUri) {
        this.redirectUri = redirectUri;
        return this;
    }
    getRedirectUri() {
        return this.redirectUri;
    }
    setState(state) {
        this.state = state;
        return this;
    }
    getState() {
        return this.state;
    }
    getClientId() {
        return this.clientId;
    }
    build() {
        const urlParams = new URLSearchParams();
        urlParams.append('client_id', this.clientId);
        urlParams.append('response_type', this.responseType);
        urlParams.append('scope', this.scopes.join(' '));
        if (this.redirectUri)
            urlParams.append('redirect_uri', this.redirectUri);
        if (this.state)
            urlParams.append('state', this.state);
        return `${this.baseURL}/auth/oauth2?${urlParams.toString()}`;
    }
}
class InteraAppsOAuth2Client extends baseClient.BaseClient {
    clientId;
    clientSecret;
    scopes;
    baseURL;
    constructor(clientId, clientSecret, scopes = [], baseURL = 'https://accounts.interaapps.de') {
        super(`${baseURL}/api/v2`);
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.scopes = scopes;
        this.baseURL = baseURL;
        // @ts-ignore
        this.registeredExceptions = exceptions;
    }
    checkScopes(scopes) {
        for (const scope of this.scopes) {
            if (!scopes.includes(scope))
                return false;
        }
        return false;
    }
    setScopes(scopes) {
        this.scopes = scopes;
        return this;
    }
    getScopes() {
        return this.scopes;
    }
    async exchangeToken(code) {
        return await this.post('/authorization/oauth2/access_token', {
            client_id: this.clientId,
            client_secret: this.clientSecret,
            code,
        });
    }
    async exchangeTokenAndGetClient(code) {
        return new index.AccountsClient((await this.exchangeToken(code)).access_token, this.baseURL);
    }
    urlBuilder() {
        return new InteraAppsOAuth2URLBuilder(this.clientId, this.baseURL);
    }
}

exports.AccountNotGrantedApp = exceptions.AccountNotGrantedApp;
exports.AlreadyLinked = exceptions.AlreadyLinked;
exports.Authentication = exceptions.Authentication;
exports.AuthenticationInvalid = exceptions.AuthenticationInvalid;
exports.ChallengeFailed = exceptions.ChallengeFailed;
exports.HTTP = exceptions.HTTP;
exports.InteraAppsAccountsException = exceptions.InteraAppsAccountsException;
exports.InternalError = exceptions.InternalError;
exports.InvalidRequest = exceptions.InvalidRequest;
exports.NamespacePermissionsDenied = exceptions.NamespacePermissionsDenied;
exports.NotFound = exceptions.NotFound;
exports.PermissionsDenied = exceptions.PermissionsDenied;
exports.PrivacyPoliciesNotChecked = exceptions.PrivacyPoliciesNotChecked;
exports.TokenExpired = exceptions.TokenExpired;
exports.InteraAppsOAuth2Client = InteraAppsOAuth2Client;
exports.InteraAppsOAuth2URLBuilder = InteraAppsOAuth2URLBuilder;
//# sourceMappingURL=oauth2Client.js.map
