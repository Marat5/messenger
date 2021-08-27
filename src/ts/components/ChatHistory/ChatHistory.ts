import { Block } from '../../Block';
import { chatHistoryTemplate } from './chatHistoryTemplate';

export type Message = {
  time: string
  message: string
  date: string
  firstOfDay: boolean
}

type ChatHistoryProps = {
  messages: Message[];
  chatInfo: any;
}

export class ChatHistory extends Block<ChatHistoryProps> {
  constructor(props) {
    super(props);
    this.props.messages = props.messages || [];
    this.props.chatInfo = props.chatInfo || null;
  }

  render() {
    return chatHistoryTemplate({ messages: this.props.messages });
  }
}
