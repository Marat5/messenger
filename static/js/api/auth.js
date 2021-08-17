import { HTTPTransport } from './HTTPTransport.js';
const transport = new HTTPTransport();
var authApiMethods;
(function (authApiMethods) {
    authApiMethods["login"] = "/auth/signin";
    authApiMethods["register"] = "/auth/signup";
    authApiMethods["logout"] = "/user/password";
})(authApiMethods || (authApiMethods = {}));
export const login = (data) => transport.post(`${authApiMethods.login}`, { data: JSON.stringify(data) });
export const register = (data) => transport.post(`${authApiMethods.register}`, { data: JSON.stringify(data) });
export const logout = () => transport.post(`${authApiMethods.logout}`, {});
