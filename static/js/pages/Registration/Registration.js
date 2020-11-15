import { Block } from "../../Block.js";
import AuthForm from "../../components/AuthForm/AuthForm.js";
import Button from "../../components/Button/Button.js";
import { addListenerToForm } from "../../utils.js";
import { formFields } from './registrationData.js';
import authApi from '../../api/auth.js';
export default class Registration extends Block {
    constructor(props) {
        // Создаем враппер дом-элемент button
        super("div", {
            authForm: new AuthForm({
                formFields,
                containerClass: 'registration-container',
                headerText: 'Регистрация',
                secondaryText: 'Войти',
                secondaryHref: '/login',
                button: new Button({ buttonText: 'Зарегистрироваться', buttonType: 'submit' }).render()
            })
        }, ['wrapper']);
    }
    onSubmit(data) {
        authApi.register(data).then((response) => {
            console.log(response.status);
        });
    }
    componentDidMount() { }
    render() {
        setTimeout(() => {
            addListenerToForm('.auth-container__form', formFields, this.onSubmit);
        }, 50);
        return this.props.authForm.render();
    }
}
