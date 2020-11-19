import { HTTPTransport } from './HTTPTransport';
import { BASE_URL } from './constants';

const transport = new HTTPTransport();

enum chatApiMethods {
    chats = `/chats`,
    users = '/chats/users',
}

export const getChats = () => {
    return transport.get(`${BASE_URL}${chatApiMethods.chats}`)
}

export const createChat = (data) => {
    return transport.post(`${BASE_URL}${chatApiMethods.chats}`, { data: JSON.stringify(data) })
}

export const addUsersToChat = (data) => {
    return transport.put(`${BASE_URL}${chatApiMethods.users}`, { data: JSON.stringify(data) })
}

export const deleteUsersFromChat = (data) => {
    return transport.delete(`${BASE_URL}${chatApiMethods.users}`, { data: JSON.stringify(data) })
}
