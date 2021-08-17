import { Block } from '../../Block.js';
import { chatListTemplate } from './chatListTemplate.js';
export class ChatList extends Block {
    constructor(props) {
        super('div', props, ['wrapper']);
        this.chats = props.chats;
    }
    render() {
        const compiledChatOptionsTemplate = chatListTemplate(this.chats);
        return compiledChatOptionsTemplate;
    }
}
