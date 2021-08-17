import { ApiResponse, HTTPTransport } from './HTTPTransport';

const transport = new HTTPTransport();

enum chatApiMethods {
    chats = '/chats',
    users = '/chats/users',
    chatToken = '/chats/token/'
}

export const getChats = () => transport.get(`${chatApiMethods.chats}`);

export const createChat = (data) => transport.post(`${chatApiMethods.chats}`, { data: JSON.stringify(data) });

export const addUsersToChat = (data) => transport.put(`${chatApiMethods.users}`, { data: JSON.stringify(data) });

export const deleteUsersFromChat = (data) => transport.delete(`${chatApiMethods.users}`, { data: JSON.stringify(data) });

export const getTokenForChat = (data) => transport.post(`${chatApiMethods.chatToken}${data.chatId}`);

export const getChatSocket = (data) => {
  let token;
  return getTokenForChat({ chatId: 1 }).then((response: ApiResponse) => {
    if (response.status === 200) {
      response.json().then((data: {token: string}) => {
        token = data.token;
      });
    }
  }).then(() => {
    const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${data.userId}/${data.chatId}/${data.token}`);
    return socket;
  });
};
