import { router } from '../../Router';
import { logout } from '../../api/auth';
import { Button } from '../../components/Button/Button';
import { addListenerToForm } from '../../utils';
import { Block } from '../../Block';
import { ProfileForm } from '../../components/ProfileForm/ProfileForm';
import { profileTemplate } from './profileTemplate';
import { fieldsArray } from './profileData';
import { changeProfile } from '../../api/profile';

type ProfileProps = {
  profileForm: string;
  profileData: any;
}

const initialProfileProps = {
  profileForm: new ProfileForm({
    fieldsArray,
    button: new Button({ buttonText: 'Сохранить', buttonType: 'submit', buttonStyle: 'primary-button disabled' }).render(),
  }).render(),
  profileData: JSON.parse(localStorage.getItem('user')),
};

export class Profile extends Block<ProfileProps> {
  constructor() {
    // В компонентах, которые рендерятся роутером (верхнеуровневых), задаем initial props
    // В них можем менять пропсы через this.setProps() для упрощения работы
    // Без необходимости внедрять state
    super(initialProfileProps);
  }

  async onSubmit(data) {
    alert('Редактирование профиля сейчас недоступно');

    // try {
    //   const dataToSend = {};
    //   Object.keys(data).forEach((key) => {
    //     if (data[key]) {
    //       dataToSend[key] = data[key];
    //     }
    //   });
    //   console.log(dataToSend);

    //   if (Object.keys(dataToSend)) {
    //     const changeProfileResponse = await changeProfile(dataToSend);
    //     if (changeProfileResponse.status !== 200) {
    //       throw new Error(`Статус ответа ${changeProfileResponse.status}`);
    //     }
    //   }
    // } catch {
    //   alert('Что-то пошло не так');
    // }
  }

  onLogout = async () => {
    try {
      const response = await logout();
      if (response.status === 200) {
        localStorage.removeItem('user');
        router.go('/login');
      } else {
        throw new Error(`Статус ответа ${response.status}`);
      }
    } catch {
      alert('Ошибка при попытке выйти');
    }
  }

  render() {
    setTimeout(() => {
      addListenerToForm('#profile-form', fieldsArray, this.onSubmit);
      document.getElementById('exitButton')?.addEventListener('click', this.onLogout);
    }, 0);

    const compiledBodyTemplate = profileTemplate({
      profileData: this.props.profileData,
      profileForm: this.props.profileForm,
      exitButton: new Button({
        id: 'exitButton', buttonText: 'Выйти', buttonStyle: 'danger-button',
      }).render(),
    });
    return compiledBodyTemplate;
  }
}
