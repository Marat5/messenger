import { Block } from '../../Block';
import { chatOptionTemplate } from './chatOptionTemplate';

type ChatOptionProps = {
  chat: any;
  onChatClick: (chatId: number) => void;
}

export class ChatOption extends Block<ChatOptionProps> {
  componentDidMount() {
    const chatId = this.props.chat.id;
    setTimeout(() => {
      const chatElement = document.getElementById(chatId);
      if (chatElement) {
        chatElement.onclick = () => this.props.onChatClick(chatId);
      }
    }, 0);
  }

  render() {
    return chatOptionTemplate(this.props.chat);
  }
}
