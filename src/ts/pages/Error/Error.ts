import { Block } from '../../Block';
import { errorTemplate } from './errorTemplate';
import { errorData } from './errorData';

export class ErrorBlock extends Block {
  render() {
    return errorTemplate({ errorData });
  }
}
