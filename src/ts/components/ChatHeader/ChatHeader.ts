import { Block } from '../../Block';
import { chatHeaderTemplate } from './chatHeaderTemplate';

type ChatHeaderProps = {
    selectedChatInfo?: any;
}

export class ChatHeader extends Block<ChatHeaderProps> {
  render() {
    return chatHeaderTemplate(this.props);
  }
}
