/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
import { queryStringify } from '../utils';
import { BASE_URL } from './constants';

// eslint-disable-next-line no-shadow
enum METHODS {
    GET = 'GET',
    PUT = 'PUT',
    POST = 'POST',
    DELETE = 'DELETE',
}

type RequestOptions = {
    data?: any
    timeout?: number
    headers?: any
    method?: string
    body?: string
    hasFile?: boolean
}

class HTTPTransport {
    get = (url, options: RequestOptions = {}) => {
      if (options.data) {
        url += queryStringify(options.data);
      }
      return this.request(url, { ...options, method: METHODS.GET }, options.timeout);
    };

    post = (url, options: RequestOptions = {}) => this.request(url, { data: options.data, method: METHODS.POST }, options.timeout)

    put = (url, options: RequestOptions = {}) => this.request(url, { data: options.data, method: METHODS.PUT }, options.timeout)

    delete = (url, options: RequestOptions = {}) => this.request(url, { data: JSON.stringify(options.data), method: METHODS.DELETE }, options.timeout)

    request = (url, options: RequestOptions = {}, timeout = 5000): Promise<XMLHttpRequest> => {
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

        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        xhr.withCredentials = true;
        xhr.responseType = 'json';

        if (headers) {
          for (const [key, value] of Object.entries(headers)) {
            xhr.setRequestHeader(`${key}`, `${value}`);
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

export const transport = new HTTPTransport();
