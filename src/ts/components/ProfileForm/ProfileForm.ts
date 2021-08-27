import { Block } from '../../Block';
import { profileFormTemplate } from './profileFormTemplate';

type ProfileFormProps = {
  fieldsArray: any[];
  button: string;
}

export class ProfileForm extends Block<ProfileFormProps> {
  render() {
    return profileFormTemplate({ fieldsArray: this.props.fieldsArray, button: this.props.button });
  }
}
