/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
import { queryStringify } from '../utils.js';
import { BASE_URL } from './constants.js';
// eslint-disable-next-line no-shadow
var METHODS;
(function (METHODS) {
    METHODS["GET"] = "GET";
    METHODS["PUT"] = "PUT";
    METHODS["POST"] = "POST";
    METHODS["DELETE"] = "DELETE";
})(METHODS || (METHODS = {}));
export class HTTPTransport {
    constructor() {
        this.get = (url, options = {}) => {
            if (options.data) {
                url += queryStringify(options.data);
            }
            return this.request(url, Object.assign(Object.assign({}, options), { method: METHODS.GET }), options.timeout);
        };
        this.post = (url, options = {}) => this.request(url, { data: options.data, method: METHODS.POST }, options.timeout);
        this.put = (url, options = {}) => this.request(url, { data: options.data, method: METHODS.PUT }, options.timeout);
        this.delete = (url, options = {}) => this.request(url, { data: JSON.stringify(options.data), method: METHODS.DELETE }, options.timeout);
        this.request = (url, options = {}, timeout = 5000) => {
            const { headers, method, data } = options;
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open(method, `${BASE_URL}${url}`);
                xhr.onload = () => {
                    resolve(xhr);
                };
                xhr.timeout = timeout;
                xhr.onabort = reject;
                xhr.onerror = reject;
                xhr.ontimeout = reject;
                if (headers) {
                    for (const [key, value] of Object.entries(headers)) {
                        xhr.setRequestHeader(`${key}`, `${value}`);
                    }
                }
                if (method === METHODS.GET || !data) {
                    xhr.send();
                }
                else {
                    xhr.send(data);
                }
            });
        };
    }
}
