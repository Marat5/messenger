import { Block } from '../../Block';
import { Message } from '../ChatHistory/ChatHistory';
import { chatMessageTemplate } from './chatMessageTemplate';

type ChatMessageProps = {
  message: Message
}

export class ChatMessage extends Block<ChatMessageProps> {
  render() {
    return chatMessageTemplate(this.props.message);
  }
}
