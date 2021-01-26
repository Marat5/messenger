let formFieldsjson = JSON.stringify([
    {
        name: "login",
        label: "Логин",
        validationRule: "^([a-z0-9]{5,})$",
    },
    {
        name: "password",
        label: "Пароль",
        validationRule: "^([a-z0-9]{5,})$",
    }
]);
export let formFields = JSON.parse(formFieldsjson);
