let formFieldsjson = JSON.stringify([
    {
        name: "first_name",
        label: "Имя",
        validationRule: "^([a-z0-9]{5,})$",
    },
    {
        name: "second_name",
        label: "Фамилия",
        validationRule: "^([a-z0-9]{5,})$",
    },
    {
        name: "login",
        label: "Логин",
        validationRule: "^([a-z0-9]{5,})$",
    },
    {
        name: "email",
        label: "Почта",
        validationRule: "^([a-z0-9]{5,})$",
    },
    {
        name: "password",
        label: "Пароль",
        validationRule: "^([a-z0-9]{5,})$",
    },
    {
        name: "phone",
        label: "Телефон",
        validationRule: "^([a-z0-9]{5,})$",
    }
]);
export let formFields = JSON.parse(formFieldsjson);
