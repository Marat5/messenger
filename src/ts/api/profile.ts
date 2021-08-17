// Импорт без расширения  почему-то не работает. Ребята обсуджали в общем чате, решения не нашли
import { HTTPTransport } from './HTTPTransport';

const transport = new HTTPTransport();

enum profileApiMethods {
    profile = '/user/profile',
    changeAvatar = '/user/profile/avatar',
    changePassword = '/user/password'
}

export const changeProfile = (data) => transport.put(`${profileApiMethods.profile}`, { data: JSON.stringify(data) });

export const changeAvatar = (data) => transport.put(`${profileApiMethods.changeAvatar}`, { data });

export const changePassword = (data) => transport.put(`${profileApiMethods.changePassword}`, { data: JSON.stringify(data) });
