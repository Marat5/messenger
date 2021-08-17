import { addListenerToForm } from '../../utils.js';
import { Button } from '../../components/Button/Button.js';
import { Block } from '../../Block.js';
import { AuthForm } from '../../components/AuthForm/AuthForm.js';
import { formFields } from './loginData.js';
import { login } from '../../api/auth.js';
export class Login extends Block {
    constructor(props) {
        super('div', {
            authForm: new AuthForm({
                formFields,
                containerClass: 'login-container',
                headerText: 'Вход',
                secondaryText: 'Нет аккаунта?',
                secondaryHref: '/registration',
                button: new Button({ buttonText: 'Авторизоваться', buttonType: 'submit' }).render(),
            }),
        }, ['wrapper']);
    }
    onSubmit(data) {
        login(data).then((response) => {
            console.log(response.status);
            if (response.status !== 200) {
                alert('Что-то пошло не так');
            }
        }).catch((err) => {
            alert('Что-то пошло не так');
        });
    }
    render() {
        // Я, к сожалению, так и не понял как сделать лучше. html были раньше только в папке static, сейчас добавил в src
        setTimeout(() => {
            addListenerToForm('.auth-container__form', formFields, this.onSubmit);
        }, 50);
        return this.props.authForm.render();
    }
}
