import { BASE_URL } from './constants';

enum METHODS {
    GET = 'GET',
    PUT = 'PUT',
    POST = 'POST',
    DELETE = 'DELETE',
};


export function queryStringify(data) {
    const paramsArray = []

    for (let [key, value] of Object.entries(data)) {
        value = Array.isArray(value) ? value.join(',') : value;
        paramsArray.push(`${key}=${value}`)
    }
    return `?${paramsArray.join('&')}`;
}

type RequestOptions = {
    data?: any
    timeout?: number
    headers?: any
    method?: string
    body?: string
    hasFile?: boolean
}

export type ApiResponse = {
    status: number
    json(): Promise<object>
}


export class HTTPTransport {
    get = (url, options: RequestOptions = {}) => {
        if (options.data) {
            url += queryStringify(options.data);
        }
        return this.request(url, { ...options, method: METHODS.GET }, options.timeout);
    };

    post = (url, options: RequestOptions = {}) => {
        return this.request(url, { data: options.data, method: METHODS.POST }, options.timeout)
    }

    put = (url, options: RequestOptions = {}) => {
        return this.request(url, { data: options.data, method: METHODS.PUT }, options.timeout)
    }

    delete = (url, options: RequestOptions = {}) => {
        return this.request(url, { data: JSON.stringify(options.data), method: METHODS.DELETE }, options.timeout)
    }

    request = (url, options: RequestOptions = {}, timeout = 5000) => {
        const { headers, method, data } = options;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            xhr.open(method, `${BASE_URL}${url}`);

            xhr.onload = function () {
                resolve(xhr);
            };

            xhr.timeout = timeout;
            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;

            if (headers) {
                for (let [key, value] of Object.entries(headers)) {
                    xhr.setRequestHeader(`${key}`, `${value}`)
                }
            }

            if (method === METHODS.GET || !data) {
                xhr.send();
            } else {
                xhr.send(data);
            }
        });
    };
}