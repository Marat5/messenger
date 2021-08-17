import { Block } from '../../Block';
import { buttonTemplate } from './buttonTemplate';

export class Button extends Block {
    buttonText: string;

    buttonType: string;

    buttonStyle: string;

    constructor(props) {
      // Создаем враппер дом-элемент button
      super('div', {}, ['wrapper']);
      this.buttonText = props.buttonText;
      this.buttonType = props.buttonType || 'button';
      this.buttonStyle = props.buttonStyle || 'primary-button';
    }

    render() {
      return buttonTemplate({ buttonText: this.buttonText, buttonType: this.buttonType, buttonStyle: this.buttonStyle });
    }
}
