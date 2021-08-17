import { HTTPTransport } from './HTTPTransport';

const transport = new HTTPTransport();

enum authApiMethods {
    login = '/auth/signin',
    register = '/auth/signup',
    logout = '/user/password'
}

export const login = (data) => transport.post(`${authApiMethods.login}`, { data: JSON.stringify(data) });

export const register = (data) => transport.post(`${authApiMethods.register}`, { data: JSON.stringify(data) });

export const logout = () => transport.post(`${authApiMethods.logout}`, {});
