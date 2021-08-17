// for 404 error
const errorDatajson = JSON.stringify({
    status: '404',
    errorText: 'Не туда попали',
    backText: 'Назад к чатам',
});
export const errorData = JSON.parse(errorDatajson);
