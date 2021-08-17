// Импорт без расширения  почему-то не работает. Ребята обсуджали в общем чате, решения не нашли
import { HTTPTransport } from './HTTPTransport.js';
const transport = new HTTPTransport();
var profileApiMethods;
(function (profileApiMethods) {
    profileApiMethods["profile"] = "/user/profile";
    profileApiMethods["changeAvatar"] = "/user/profile/avatar";
    profileApiMethods["changePassword"] = "/user/password";
})(profileApiMethods || (profileApiMethods = {}));
export const changeProfile = (data) => transport.put(`${profileApiMethods.profile}`, { data: JSON.stringify(data) });
export const changeAvatar = (data) => transport.put(`${profileApiMethods.changeAvatar}`, { data });
export const changePassword = (data) => transport.put(`${profileApiMethods.changePassword}`, { data: JSON.stringify(data) });
