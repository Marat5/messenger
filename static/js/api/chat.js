import { HTTPTransport } from './HTTPTransport.js';
const transport = new HTTPTransport();
var chatApiMethods;
(function (chatApiMethods) {
    chatApiMethods["chats"] = "/chats";
    chatApiMethods["users"] = "/chats/users";
    chatApiMethods["chatToken"] = "/chats/token/";
})(chatApiMethods || (chatApiMethods = {}));
export const getChats = () => {
    return transport.get(`${chatApiMethods.chats}`);
};
export const createChat = (data) => {
    return transport.post(`${chatApiMethods.chats}`, { data: JSON.stringify(data) });
};
export const addUsersToChat = (data) => {
    return transport.put(`${chatApiMethods.users}`, { data: JSON.stringify(data) });
};
export const deleteUsersFromChat = (data) => {
    return transport.delete(`${chatApiMethods.users}`, { data: JSON.stringify(data) });
};
export const getTokenForChat = (data) => {
    return transport.post(`${chatApiMethods.chatToken}${data.chatId}`);
};
export const getChatSocket = (data) => {
    let token;
    return getTokenForChat({ chatId: 1 }).then((response) => {
        if (response.status === 200) {
            response.json().then((data) => {
                token = data.token;
            });
        }
    }).then(() => {
        const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${data.userId}/${data.chatId}/${data.token}`);
        return socket;
    });
};
