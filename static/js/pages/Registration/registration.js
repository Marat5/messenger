// import createAuthForm from '../components/AuthForm/AuthForm.js';
// import Button from '../components/Button/Button.js';
// import { addListenerToForm, addValidationToForm } from '../utils.js'
import { Block } from "../../Block";
import AuthForm from "../../components/AuthForm/AuthForm";
import Button from "../../components/Button/Button";
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
];
// let container = document.querySelector('.wrapper');
// let compiledFormTemplate = createAuthForm(formFields, 'registration-container', 'Регистрация', 'Зарегистрироваться', 'Войти');
// container.innerHTML = compiledFormTemplate;
// document.querySelector('#button-container').innerHTML = Button("Регистрация");
// let onSubmit = (formData: any) => {
//     console.log(formData.get('first_name'), formData.get('second_name'), formData.get('login'), formData.get('email'), formData.get('password'), formData.get('phone'))
// }
// addValidationToForm(formFields);
// addListenerToForm(onSubmit);
class Registration extends Block {
    constructor(props) {
        // Создаем враппер дом-элемент button
        super("div", {
            authForm: new AuthForm({
                formFields,
                containerClass: 'registration-container',
                headerText: 'Регистрация',
                buttonText: 'Зарегистрироваться',
                secondaryText: 'Войти',
                button: new Button({ buttonText: 'Зарегистрироваться' }).render()
            })
        }, ['wrapper']);
    }
    render() {
        return this.props.authForm.render();
    }
}
function render(query, block) {
    const root = document.querySelector(query);
    root.appendChild(block.getContent());
    // let onSubmit = (formData) => {
    //     console.log(formData.get('message'))
    // }
    // addValidationToForm([{ name: 'message' }])
    // addListenerToForm(onSubmit);
    return root;
}
const registration = new Registration({});
render("body", registration);
