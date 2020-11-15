import { HTTPTransport } from './HTTPTransport.js';

const transport = new HTTPTransport();
const baseUrl = `https://ya-praktikum.tech/api/v2`

export default {
    getChats() {
        return transport.get(`${baseUrl}/chats`)
    },

    createChat(data) {
        return transport.post(`${baseUrl}/chats`, { data })
    },

    addUsersToChat(data) {
        return transport.put(`${baseUrl}/chats/users`, { data })
    },

    deleteUsersFromChat(data) {
        return transport.delete(`${baseUrl}/chats/users`, { data })
    }
}