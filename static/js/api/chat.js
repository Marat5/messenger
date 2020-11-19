import { HTTPTransport } from './HTTPTransport.js';
import { BASE_URL } from './constants.js';
const transport = new HTTPTransport();
var chatApiMethods;
(function (chatApiMethods) {
    chatApiMethods["chats"] = "/chats";
    chatApiMethods["users"] = "/chats/users";
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
