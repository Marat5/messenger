import { Block } from '../../Block.js';
import { AuthForm } from '../../components/AuthForm/AuthForm.js';
import { Button } from '../../components/Button/Button.js';
import { addListenerToForm } from '../../utils.js';
import { formFields } from './registrationData.js';
import { register } from '../../api/auth.js';
export class Registration extends Block {
    constructor(props) {
        super('div', {
            authForm: new AuthForm({
                formFields,
                containerClass: 'registration-container',
                headerText: 'Регистрация',
                secondaryText: 'Войти',
                secondaryHref: '/login',
                button: new Button({ buttonText: 'Зарегистрироваться', buttonType: 'submit' }).render(),
            }),
        }, ['wrapper']);
    }
    onSubmit(data) {
        register(data).then((response) => {
            console.log(response.status);
            if (response.status !== 200) {
                alert('Что-то пошло не так');
            }
        }).catch((err) => {
            alert('Что-то пошло не так');
        });
    }
    render() {
        setTimeout(() => {
            addListenerToForm('.auth-container__form', formFields, this.onSubmit);
        }, 50);
        return this.props.authForm.render();
    }
}
