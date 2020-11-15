import { addListenerToForm } from '../../utils.js';
import Button from '../../components/Button/Button.js';
import { Block } from '../../Block.js';
import AuthForm from '../../components/AuthForm/AuthForm.js';
import { formFields } from './loginData.js';
import authApi from '../../api/auth.js'

export default class Login extends Block {
    authForm: any
    constructor(props) {
        // Создаем враппер дом-элемент button
        super("div", {
            authForm: new AuthForm({
                formFields,
                containerClass: 'login-container',
                headerText: 'Вход',
                secondaryText: 'Нет аккаунта?',
                secondaryHref: '/registration',
                button: new Button({ buttonText: 'Авторизоваться', buttonType: 'submit' }).render()
            })
        }, ['wrapper']);
    }

    onSubmit(data) {
        authApi.login(data).then((response: any) => {
            console.log(response.status)
        })
    }


    componentDidMount() { }

    render() {
        setTimeout(() => {
            addListenerToForm('.auth-container__form', formFields, this.onSubmit);
        }, 50)
        return this.props.authForm.render()
    }
}
