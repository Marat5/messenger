import createAuthForm from '../components/AuthForm/AuthForm.js';
import { addListenerToForm, addValidationToForm } from '../utils.js';
import Button from '../components/Button/Button.js';
let formFields = [
    {
        name: "login",
        label: "Логин",
    },
    {
        name: "password",
        label: "Пароль",
    }
];
let container = document.querySelector('.wrapper');
let compiledFormTemplate = createAuthForm(formFields, 'login-container', 'Вход', 'Авторизоваться', 'Нет аккаунта?');
container.innerHTML = compiledFormTemplate;
addValidationToForm(formFields);
document.querySelector('#button-container').innerHTML = Button("Вход");
let onSubmit = (formData) => {
    console.log(formData.get('login'), formData.get('password'));
};
addListenerToForm(onSubmit);
