// Везде импортируется  потому что без указания расширения не работает. Я не знаю почему( В чате практикума ребята пишут, что у них тоже так
import { HTTPTransport } from './HTTPTransport';
import { BASE_URL } from './constants';

const transport = new HTTPTransport();

enum authApiMethods {
    login = `/auth/signin`,
    register = '/auth/signup',
    logout = `/user/password`
}

export const login = (data) => {
    return transport.post(`${BASE_URL}${authApiMethods.login}`, { data: JSON.stringify(data) })
}

export const register = (data) => {
    return transport.post(`${BASE_URL}${authApiMethods.register}`, { data: JSON.stringify(data) })
}

export const logout = () => {
    return transport.post(`${BASE_URL}${authApiMethods.logout}`, {})
}
