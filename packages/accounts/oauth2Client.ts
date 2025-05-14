import { BaseClient } from '@interaapps/base-client';
export * from './exceptions'
import * as exceptions from "./exceptions";
import {OAuth2TokenExchange} from "./types/responses";
import {AccountsClient} from "./index";

export class InteraAppsOAuth2URLBuilder {
    private scopes: string[] = []
    private redirectUri = ''
    private state = ''
    private responseType = 'code'

    constructor(private clientId: string, private baseURL: string = 'https://accounts.interaapps.de') {
    }

    setScopes(scopes: string[]) {
        this.scopes = scopes;
        return this;
    }
    getScopes() {
        return this.scopes;
    }
    setResponseType(responseType: 'token' | 'code') {
        this.responseType = responseType;
        return this;
    }
    getResponseType() {
        return this.responseType;
    }
    setRedirectUri(redirectUri: string) {
        this.redirectUri = redirectUri;
        return this;
    }
    getRedirectUri() {
        return this.redirectUri;
    }
    setState(state: string) {
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

        if (this.redirectUri) urlParams.append('redirect_uri', this.redirectUri);
        if (this.state) urlParams.append('state', this.state);

        return `${this.baseURL}/auth/oauth2?${urlParams.toString()}`;
    }
}

export class InteraAppsOAuth2Client extends BaseClient {
    constructor(private clientId: string, private clientSecret: string|undefined, private scopes: string[] =[], private baseURL: string = 'https://accounts.interaapps.de') {
        super(`${baseURL}/api/v2`);
        // @ts-ignore
        this.registeredExceptions = exceptions
    }


    checkScopes(scopes: string[]) {
        for (const scope of this.scopes) {
            if (!scopes.includes(scope)) return false;
        }
        return false;
    }

    setScopes(scopes: string[]) {
        this.scopes = scopes;
        return this;
    }

    getScopes() {
        return this.scopes;
    }

    async exchangeToken(code: string) {
        return await this.post('/authorization/oauth2/access_token', {
            client_id: this.clientId,
            client_secret: this.clientSecret,
            code,
        }) as OAuth2TokenExchange;
    }

    async exchangeTokenAndGetClient(code: string) {
        return new AccountsClient((await this.exchangeToken(code)).access_token, this.baseURL)
    }

    urlBuilder() {
        return new InteraAppsOAuth2URLBuilder(this.clientId, this.baseURL)
    }
}