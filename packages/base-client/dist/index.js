'use strict';

var axios = require('axios');

class UnkownException extends Error {
}
class BaseClient extends axios.Axios {
    registeredExceptions = {};
    constructor(baseURL) {
        super();
        this.defaults = {
            ...axios.defaults,
            baseURL
        };
        this.defaults.baseURL = baseURL;
        this.interceptors.response.use((response) => {
            if (typeof response.data === 'string') {
                try {
                    if (response.headers['content-type'] !== 'text/plain') {
                        response.data = JSON.parse(response.data);
                    }
                }
                catch (e) {
                    console.log(e);
                }
            }
            if (!(response.status >= 200 && response.status < 300)) {
                const error = this.registeredExceptions[response.data.exception];
                if (error) {
                    throw new error(response.data);
                }
                else {
                    throw new UnkownException('Unkown Error', response.data);
                }
            }
            return response;
        });
    }
    fork(baseClient) {
        this.defaults = baseClient.defaults;
        this.interceptors = baseClient.interceptors;
        return this;
    }
    setBaseURL(baseURL) {
        this.defaults.baseURL = baseURL;
        return this;
    }
    setHeader(key, value) {
        this.defaults.headers.common[key] = value;
        return this;
    }
    setBearerToken(token) {
        if (!token)
            return this.removeBearerToken();
        this.setHeader('Authorization', `Bearer ${token}`);
        return this;
    }
    removeHeader(key) {
        delete this.defaults.headers.common[key];
        return this;
    }
    removeBearerToken() {
        delete this.defaults.headers.common['Authorization'];
        return this;
    }
}

exports.BaseClient = BaseClient;
exports.UnkownException = UnkownException;
//# sourceMappingURL=index.js.map
