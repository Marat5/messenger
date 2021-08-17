import { Block } from '../../Block.js';
import { Button } from '../Button/Button.js';
import { profileFormTemplate } from './profileFormTemplate.js';
export class ProfileForm extends Block {
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
