// Везде импортируется  потому что без указания расширения не работает. Я не знаю почему( В чате практикума ребята пишут, что у них тоже так
import { HTTPTransport } from './HTTPTransport.js';
import { BASE_URL } from './constants.js';
const transport = new HTTPTransport();
var authApiMethods;
(function (authApiMethods) {
    authApiMethods["login"] = "/auth/signin";
    authApiMethods["register"] = "/auth/signup";
    authApiMethods["logout"] = "/user/password";
})(authApiMethods || (authApiMethods = {}));
export const login = (data) => {
    return transport.post(`${BASE_URL}${authApiMethods.login}`, { data: JSON.stringify(data) });
};
export const register = (data) => {
    return transport.post(`${BASE_URL}${authApiMethods.register}`, { data: JSON.stringify(data) });
};
export const logout = () => {
    return transport.post(`${BASE_URL}${authApiMethods.logout}`, {});
};
