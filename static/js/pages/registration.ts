import createAuthForm from '../components/authForm.js';
import Button from '../components/button.js';
import { addListenerToForm, addValidationToForm } from '../utils.js'

let formFields = [
    {
        name: "first_name",
        label: "Имя",
    },
    {
        name: "second_name",
        label: "Фамилия",
    },
    {
        name: "login",
        label: "Логин",
    },
    {
        name: "email",
        label: "Почта",
    },
    {
        name: "password",
        label: "Пароль",
    },
    {
        name: "phone",
        label: "Телефон",
    }
]

let container = document.querySelector('.wrapper');

let compiledFormTemplate = createAuthForm(formFields, 'registration-container', 'Регистрация', 'Зарегистрироваться', 'Войти');
container.innerHTML = compiledFormTemplate;

document.querySelector('#button-container').innerHTML = Button("Регистрация");


let onSubmit = (formData: any) => {
    console.log(formData.get('first_name'), formData.get('second_name'), formData.get('login'), formData.get('email'), formData.get('password'), formData.get('phone'))
}

addValidationToForm(formFields);


addListenerToForm(onSubmit);