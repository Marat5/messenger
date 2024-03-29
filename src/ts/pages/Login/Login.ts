import { router } from '../../Router';
import { addListenerToForm } from '../../utils';
import { Button } from '../../components/Button/Button';
import { Block } from '../../Block';
import { AuthForm } from '../../components/AuthForm/AuthForm';
import { formFields } from './loginData';
import { getProfile, login } from '../../api/auth';

type LoginProps = {
  authForm: AuthForm;
}

const initialLoginProps = {
  authForm: new AuthForm({
    formFields,
    containerClass: 'login-container',
    headerText: 'Вход',
    secondaryText: 'Нет аккаунта?',
    secondaryHref: '/registration',
    button: new Button({ buttonText: 'Авторизоваться', buttonType: 'submit' }).render(),
  }),
};

export class Login extends Block<LoginProps> {
  constructor() {
    // В компонентах, которые рендерятся роутером (верхнеуровневых), задаем initialProps
    // В них можем менять пропсы через this.setProps() для упрощения работы
    // Без необходимости внедрять state
    super(initialLoginProps);
  }

  onSubmit = async (data) => {
    try {
      const loginResponse = await login(data);
      if (loginResponse.status !== 200) {
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
