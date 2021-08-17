import { Block } from '../../Block';
import { chatListTemplate } from './chatListTemplate';

export class ChatList extends Block {
    chats: any;

    constructor(props) {
      super('div', props, ['wrapper']);
      this.chats = props.chats;
    }

    render() {
      const compiledChatOptionsTemplate = chatListTemplate(this.chats);
      return compiledChatOptionsTemplate;
    }
}
