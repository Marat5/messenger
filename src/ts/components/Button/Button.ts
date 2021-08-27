import { Block } from '../../Block';
import { buttonTemplate } from './buttonTemplate';

type ButtonProps = {
  id: string;
  buttonText: string;
  buttonType: string;
  buttonStyle: 'primary-button' | 'danger-button' | 'create-button';
  onClick?: () => void;
}

export class Button extends Block<ButtonProps> {
  constructor(props) {
    // Создаем враппер дом-элемент button
    super(props);
    this.props.buttonType = this.props.buttonType || 'button';
    this.props.buttonStyle = this.props.buttonStyle || 'primary-button';
  }

  render() {
    return buttonTemplate({
      id: this.props.id, buttonText: this.props.buttonText, buttonType: this.props.buttonType, buttonStyle: this.props.buttonStyle,
    });
  }
}
