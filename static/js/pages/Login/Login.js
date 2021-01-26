import { addListenerToForm } from '../../utils.js';
import Button from '../../components/Button/Button.js';
import { Block } from '../../Block.js';
import AuthForm from '../../components/AuthForm/AuthForm.js';
import { formFields } from './loginData.js';
import { login } from '../../api/auth.js';
export default class Login extends Block {
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
        login(data).then((response) => {
            console.log(response.status);
            if (response.status !== 200) {
                alert("Что-то пошло не так");
            }
        }).catch(err => {
            alert("Что-то пошло не так");
        });
    }
    componentDidMount() { }
    render() {
        // Здесь таймаут так как в момент вызова этого метода, формы еще нет в DOM, без таймаута выкинет ошибку. Рекомендации по улучшению приветствуются:)
        setTimeout(() => {
            addListenerToForm('.auth-container__form', formFields, this.onSubmit);
        }, 50);
        return this.props.authForm.render();
    }
}
