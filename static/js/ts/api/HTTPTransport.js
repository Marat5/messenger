const METHODS = {
    GET: 'GET',
    PUT: 'PUT',
    POST: 'POST',
    DELETE: 'DELETE',
};
function queryStringify(data) {
    let paramsArray = [];
    for (let [key, value] of Object.entries(data)) {
        value = Array.isArray(value) ? value.join(',') : value;
        paramsArray.push(`${key}=${value}`);
    }
    return `?${paramsArray.join('&')}`;
}
export default class HTTPTransport {
    constructor() {
        this.get = (url, options = {}) => {
            if (options.data) {
                url += queryStringify(options.data);
            }
            return this.request(url, Object.assign(Object.assign({}, options), { method: METHODS.GET }), options.timeout);
        };
        this.request = (url, options = {}, timeout = 5000) => {
            const { headers, method, data } = options;
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open(method, url);
                xhr.onload = function () {
                    resolve(xhr);
                };
                xhr.timeout = timeout;
                xhr.onabort = reject;
                xhr.onerror = reject;
                xhr.ontimeout = reject;
                if (headers) {
                    for (let [key, value] of Object.entries(headers)) {
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
