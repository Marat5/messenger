var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { HTTPTransport } from './HTTPTransport.js';
import { BASE_URL } from './constants.js';
const transport = new HTTPTransport();
var chatApiMethods;
(function (chatApiMethods) {
    chatApiMethods["chats"] = "/chats";
    chatApiMethods["users"] = "/chats/users";
    chatApiMethods["chatToken"] = "/chats/token/";
})(chatApiMethods || (chatApiMethods = {}));
export const getChats = () => {
    return transport.get(`${BASE_URL}${chatApiMethods.chats}`);
};
export const createChat = (data) => {
    return transport.post(`${BASE_URL}${chatApiMethods.chats}`, { data: JSON.stringify(data) });
};
export const addUsersToChat = (data) => {
    return transport.put(`${BASE_URL}${chatApiMethods.users}`, { data: JSON.stringify(data) });
};
export const deleteUsersFromChat = (data) => {
    return transport.delete(`${BASE_URL}${chatApiMethods.users}`, { data: JSON.stringify(data) });
};
export const getTokenForChat = (data) => {
    return transport.post(`${BASE_URL}${chatApiMethods.chatToken}${data.chatId}`);
};
export const getChatSocket = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let token;
        yield getTokenForChat({ chatId: 1 }).then((response) => {
            if (response.status === 200) {
                response.json().then((data) => {
                    token = data.token;
                });
            }
        });
        const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${data.userId}/${data.chatId}/${data.token}`);
        return socket;
    }
    catch (e) {
        console.log(e);
    }
});
