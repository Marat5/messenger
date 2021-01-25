import { addListenerToForm } from '../../utils';
import Button from '../../components/Button/Button';
import { Block } from '../../Block';
import AuthForm from '../../components/AuthForm/AuthForm';
import { formFields } from './loginData';
import { login } from '../../api/auth';
import { ApiResponse } from '../../api/HTTPTransport';

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
        login(data).then((response: ApiResponse) => {
            console.log(response.status);
            if (response.status !== 200) {
                alert("Что-то пошло не так")
            }
        }).catch(err => {
            alert("Что-то пошло не так")
        })
    }


    componentDidMount() { }

    render() {
        // Здесь таймаут так как в момент вызова этого метода, формы еще нет в DOM, без таймаута выкинет ошибку. Рекомендации по улучшению приветствуются:)
        setTimeout(() => {
            addListenerToForm('.auth-container__form', formFields, this.onSubmit);
        }, 50)
        return this.props.authForm.render()
    }
}
