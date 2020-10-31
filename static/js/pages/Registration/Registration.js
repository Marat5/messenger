import { Block } from "../../Block.js";
import AuthForm from "../../components/AuthForm/AuthForm.js";
import Button from "../../components/Button/Button.js";
import { addListenerToForm } from "../../utils.js";
import { formFields } from './registrationData.js';
class Registration extends Block {
    constructor(props) {
        // Создаем враппер дом-элемент button
        super("div", {
            authForm: new AuthForm({
                formFields,
                containerClass: 'registration-container',
                headerText: 'Регистрация',
                secondaryText: 'Войти',
                secondaryHref: '/login.html',
                button: new Button({ buttonText: 'Зарегистрироваться', buttonType: 'submit' }).render()
            })
        }, ['wrapper']);
    }
    componentDidMount() { }
    render() {
        return this.props.authForm.render();
    }
}
function render(query, block) {
    const root = document.querySelector(query);
    root.appendChild(block.getContent());
    addListenerToForm('.auth-container__form', formFields);
    return root;
}
const registration = new Registration({});
render("body", registration);
