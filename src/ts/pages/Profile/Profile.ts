import { addListenerToForm } from '../../utils';
import { Block } from '../../Block';
import { ProfileForm } from '../../components/ProfileForm/ProfileForm';
import { profileTemplate } from './profileTemplate';
import { fieldsArray, profileData } from './profileData';
import { changeProfile } from '../../api/profile';
import { ApiResponse } from '../../api/HTTPTransport';

export class Profile extends Block {
    profileForm: any;

    constructor(props) {
      super('main', {
        profileForm: new ProfileForm({ fieldsArray }).render(),
      }, ['wrapper']);
    }

    onSubmit(data) {
      changeProfile(data).then((response: ApiResponse) => {
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
        addListenerToForm('#profile-form', fieldsArray, this.onSubmit);
      }, 50);
      const compiledBodyTemplate = profileTemplate({ profileData, profileForm: this.props.profileForm });
      return compiledBodyTemplate;
    }
}
