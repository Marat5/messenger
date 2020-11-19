// Импорт без расширения  почему-то не работает. Ребята обсуджали в общем чате, решения не нашли
import { HTTPTransport } from './HTTPTransport';
import { BASE_URL } from './constants';

const transport = new HTTPTransport();

enum profileApiMethods {
    profile = `/user/profile`,
    changeAvatar = '/user/profile/avatar',
    changePassword = `/user/password`
}

export const changeProfile = (data) => {
    return transport.put(`${BASE_URL}${profileApiMethods.profile}`, { data: JSON.stringify(data) })
}

export const changeAvatar = (data) => {
    return transport.put(`${BASE_URL}${profileApiMethods.changeAvatar}`, { data })
}

export const changePassword = (data) => {
    return transport.put(`${BASE_URL}${profileApiMethods.changePassword}`, { data: JSON.stringify(data) })
}