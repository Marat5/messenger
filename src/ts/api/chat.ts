import { transport } from './HTTPTransport';

enum chatApiMethods {
    chats = '/chats',
    users = '/chats/users',
    chatToken = '/chats/token/'
}

export const getChats = () => transport.get(`${chatApiMethods.chats}`);

export const createChat = (data) => transport.post(`${chatApiMethods.chats}`, { data: JSON.stringify(data) });

export const addUsersToChat = (users: number[], chatId: number) => transport.put(`${chatApiMethods.users}`, { data: JSON.stringify({ users, chatId }) });

export const deleteUsersFromChat = (data) => transport.delete(`${chatApiMethods.users}`, { data: JSON.stringify(data) });

export const getTokenForChat = (data) => transport.post(`${chatApiMethods.chatToken}${data.chatId}`);

export const getChatSocket = async (chatId: number, userId: number) => {
  try {
    const response = await getTokenForChat({ chatId });
    if (response.status !== 200) {
      throw new Error(`Статус ответа: ${response.status}`);
    }

    const { token } = response.response;
    return new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`);
  } catch (err) {
    alert(err);
    return null;
  }
};
