import { HTTPTransport } from './HTTPTransport.js';

const transport = new HTTPTransport();
const baseUrl = `https://ya-praktikum.tech/api/v2`

export default {
    login(data) {
        return transport.post(`${baseUrl}/auth/signin`, { data })
    },

    register(data) {
        return transport.post(`${baseUrl}/auth/signup`, { data })
    },

    logout() {
        return transport.post(`${baseUrl}/auth/logout`, {})
    }
}