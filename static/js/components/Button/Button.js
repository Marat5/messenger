import { Block } from '../../Block.js';
import { buttonTemplate } from './buttonTemplate.js';
export class Button extends Block {
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
