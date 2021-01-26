import { ApiResponse, HTTPTransport } from './HTTPTransport';
import { BASE_URL } from './constants';

const transport = new HTTPTransport();

enum chatApiMethods {
    chats = `/chats`,
    users = '/chats/users',
    chatToken = `/chats/token/`
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

export const getTokenForChat = (data) => {
    return transport.post(`${BASE_URL}${chatApiMethods.chatToken}${data.chatId}`)
}

export const getChatSocket = (data) => {
        let token;
         return getTokenForChat({chatId: 1}).then((response: ApiResponse) => {
            if (response.status === 200) {
                response.json().then((data: {token: string}) => {
                    token = data.token;
                })
            }
        }).then(() => {
            const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${data.userId}/${data.chatId}/${data.token}`);
            return socket;
        })


}