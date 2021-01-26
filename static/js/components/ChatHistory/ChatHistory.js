import { Block } from '../../Block.js';
import { chatHistoryTemplate } from './chatHistoryTemplate.js';
export class ChatHistory extends Block {
    constructor(props) {
        super("main", props, ["wrapper"]);
        this.messages = props.messages;
    }
    render() {
        return chatHistoryTemplate(this.messages);
    }
}
