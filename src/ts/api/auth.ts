import { transport } from './HTTPTransport';

enum authApiMethods {
    login = '/auth/signin',
    register = '/auth/signup',
    logout = '/auth/logout'
}

export const login = (data) => transport.post(`${authApiMethods.login}`, { data: JSON.stringify(data) });

export const register = (data) => transport.post(`${authApiMethods.register}`, { data: JSON.stringify(data) });

export const logout = () => transport.post(`${authApiMethods.logout}`, {});
