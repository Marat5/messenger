import { router } from '../../Router';
import { logout } from '../../api/auth';
import { Button } from '../../components/Button/Button';
import { addListenerToForm } from '../../utils';
import { Block } from '../../Block';
import { ProfileForm } from '../../components/ProfileForm/ProfileForm';
import { profileTemplate } from './profileTemplate';
import { fieldsArray, profileData } from './profileData';
import { changeProfile } from '../../api/profile';

type ProfileProps = {
  profileForm: string;
}

export class Profile extends Block<ProfileProps> {
  constructor(props) {
    super({
      profileForm: new ProfileForm({
        fieldsArray,
        button: new Button({ buttonText: 'Сохранить', buttonType: 'submit' }).render(),
      }).render(),
    });
  }

  onSubmit(data) {
    changeProfile(data).then((response) => {
      if (response.status !== 200) {
        alert('Что-то пошло не так');
      }
    }).catch((err) => {
      alert('Что-то пошло не так');
    });
  }

  onLogout = async () => {
    const response = await logout();
    if (response.status === 200) {
      router.go('/login');
    } else {
      alert('Ошибка при попытке выйти');
    }
  }

  render() {
    setTimeout(() => {
      addListenerToForm('#profile-form', fieldsArray, this.onSubmit);
      document.getElementById('exitButton')?.addEventListener('click', this.onLogout);
    }, 0);

    const compiledBodyTemplate = profileTemplate({
      profileData,
      profileForm: this.props.profileForm,
      exitButton: new Button({
        id: 'exitButton', buttonText: 'Выйти', buttonStyle: 'danger-button',
      }).render(),
    });
    return compiledBodyTemplate;
  }
}
