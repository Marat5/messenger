import { Block } from '../../Block';
import { AuthForm } from '../../components/AuthForm/AuthForm';
import { Button } from '../../components/Button/Button';
import { addListenerToForm } from '../../utils';
import { formFields } from './registrationData';
import { getProfile, register } from '../../api/auth';
import { router } from '../../Router';

type RegistrationProps = {
  authForm: AuthForm;
}

export class Registration extends Block<RegistrationProps> {
  constructor(props) {
    super({
      authForm: new AuthForm({
        formFields,
        containerClass: 'registration-container',
        headerText: 'Регистрация',
        secondaryText: 'Войти',
        secondaryHref: '/login',
        button: new Button({ buttonText: 'Зарегистрироваться', buttonType: 'submit' }).render(),
      }),
    });
  }

  onSubmit = async (data) => {
    try {
      const regResponse = await register(data);
      if (regResponse.status !== 200) {
        return alert('Что-то пошло не так');
      }

      const userResponse = await getProfile();
      if (userResponse.status !== 200) {
        return alert('Ошибка при загрузке данных пользователя');
      }

      localStorage.setItem('user', JSON.stringify(userResponse.response));

      return router.go('/chat');
    } catch {
      return alert('Что-то пошло не так');
    }
  }

  render() {
    setTimeout(() => {
      addListenerToForm('.auth-container__form', formFields, this.onSubmit);
    }, 50);
    return this.props.authForm.render();
  }
}
