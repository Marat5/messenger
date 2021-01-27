import { HTTPTransport } from './HTTPTransport';

const transport = new HTTPTransport();

enum authApiMethods {
    login = '/auth/signin',
    register = '/auth/signup',
    logout = '/user/password'
}

export const login = (data) => {
    return transport.post(`${authApiMethods.login}`, { data: JSON.stringify(data) })
}

export const register = (data) => {
    return transport.post(`${authApiMethods.register}`, { data: JSON.stringify(data) })
}

export const logout = () => {
    return transport.post(`${authApiMethods.logout}`, {})
}
