import { Block } from "../../Block";
import AuthForm from "../../components/AuthForm/AuthForm";
import Button from "../../components/Button/Button";
import { addListenerToForm } from "../../utils";
import { formFields } from './registrationData';
import { register } from '../../api/auth'


export default class Registration extends Block {
    authForm: any
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
        register(data).then((response: any) => {
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
        setTimeout(() => {
            addListenerToForm('.auth-container__form', formFields, this.onSubmit);
        }, 50)
        return this.props.authForm.render()
    }
}
