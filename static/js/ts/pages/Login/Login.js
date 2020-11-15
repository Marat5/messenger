import Button from '../../components/Button/Button.js';
import { Block } from '../../Block.js';
import AuthForm from '../../components/AuthForm/AuthForm.js';
import { formFields } from './loginData.js';
export default class Login extends Block {
    constructor(props) {
        // Создаем враппер дом-элемент button
        super("div", {
            authForm: new AuthForm({
                formFields,
                containerClass: 'login-container',
                headerText: 'Вход',
                secondaryText: 'Нет аккаунта?',
                secondaryHref: '/registration.html',
                button: new Button({ buttonText: 'Авторизоваться', buttonType: 'submit' }).render()
            })
        }, ['wrapper']);
    }
    componentDidMount() { }
    render() {
        return this.props.authForm.render();
    }
}
// function render(query, block) {
//     const root = document.querySelector(query);
//     root.appendChild(block.getContent());
//     addListenerToForm('.auth-container__form', formFields);
//     return root;
// }
// const login = new Login({});
// render("body", login);
