import { Block } from '../../Block';
import { authFormTemplate } from './authFormTemplate';

type AuthFormProps = {
  button: string;
  formFields: any;
  containerClass?: string;
  headerText: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export class AuthForm extends Block<AuthFormProps> {
  render() {
    return authFormTemplate(this.props);
  }
}
