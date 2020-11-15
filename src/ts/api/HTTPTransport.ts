const METHODS = {
    GET: 'GET',
    PUT: 'PUT',
    POST: 'POST',
    DELETE: 'DELETE',
};


function queryStringify(data) {
    let paramsArray = []

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


export class HTTPTransport {
    get = (url, options: RequestOptions = {}) => {
        if (options.data) {
            url += queryStringify(options.data);
        }
        return this.request(url, { ...options, method: METHODS.GET }, options.timeout);
    };

    post = (url, options: RequestOptions = {}) => {
        if (options.hasFile) {
            let body = new FormData();
            Object.keys(options.data).forEach((key: string) => {
                body.append(key, options.data[key]);
            })
            return this.request(url, { data: body, method: METHODS.POST }, options.timeout)
        }
        return this.request(url, { data: JSON.stringify(options.data), method: METHODS.POST }, options.timeout)
    }

    put = (url, options: RequestOptions = {}) => {
        if (options.hasFile) {
            let body = new FormData();
            Object.keys(options.data).forEach((key: string) => {
                body.append(key, options.data[key]);
            })
            return this.request(url, { data: body, method: METHODS.PUT }, options.timeout)
        }
        return this.request(url, { data: JSON.stringify(options.data), method: METHODS.PUT }, options.timeout)
    }

    delete = (url, options: RequestOptions = {}) => {
        return this.request(url, { data: JSON.stringify(options.data), method: METHODS.DELETE }, options.timeout)
    }

    request = (url, options: RequestOptions = {}, timeout = 5000) => {
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