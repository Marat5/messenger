// Импорт без расширения  почему-то не работает. Ребята обсуджали в общем чате, решения не нашли
import { HTTPTransport } from './HTTPTransport.js';
import { BASE_URL } from './constants.js';
const transport = new HTTPTransport();
var profileApiMethods;
(function (profileApiMethods) {
    profileApiMethods["profile"] = "/user/profile";
    profileApiMethods["changeAvatar"] = "/user/profile/avatar";
    profileApiMethods["changePassword"] = "/user/password";
})(profileApiMethods || (profileApiMethods = {}));
export const changeProfile = (data) => {
    return transport.put(`${BASE_URL}${profileApiMethods.profile}`, { data: JSON.stringify(data) });
};
export const changeAvatar = (data) => {
    return transport.put(`${BASE_URL}${profileApiMethods.changeAvatar}`, { data });
};
export const changePassword = (data) => {
    return transport.put(`${BASE_URL}${profileApiMethods.changePassword}`, { data: JSON.stringify(data) });
};
