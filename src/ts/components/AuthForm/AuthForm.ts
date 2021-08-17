import { Block } from '../../Block';
import { authFormTemplate } from './authFormTemplate';

export class AuthForm extends Block {
  constructor(props) {
    super('div', props, []);
  }

  render() {
    return authFormTemplate(this.props);
  }
}
