import { Block } from '../../Block';
import { Button } from '../Button/Button';
import { profileFormTemplate } from './profileFormTemplate';

export class ProfileForm extends Block {
    fieldsArray: any[];

    button: any

    constructor(props) {
      super('div', {
        button: new Button({ buttonText: 'Сохранить', buttonType: 'submit' }).render(),
      }, []);
      this.fieldsArray = props.fieldsArray;
    }

    render() {
      return profileFormTemplate({ fieldsArray: this.fieldsArray, button: this.props.button });
    }
}
