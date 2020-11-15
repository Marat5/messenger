import { HTTPTransport } from './HTTPTransport.js';
const transport = new HTTPTransport();
const baseUrl = `https://ya-praktikum.tech/api/v2`;
export default {
    changeProfile(data) {
        return transport.put(`${baseUrl}/user/profile`, { data });
    },
    changeAvatar(data) {
        return transport.put(`${baseUrl}/user/profile/avatar`, { data, hasFile: true });
    },
    changePassword(data) {
        return transport.put(`${baseUrl}/user/password`, { data });
    }
};
