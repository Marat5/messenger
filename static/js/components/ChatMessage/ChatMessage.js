import { Block } from '../../Block.js';
import { chatMessageTemplate } from './chatMessageTemplate.js';
export class ChatMessage extends Block {
    constructor(props) {
        super("main", props, ["wrapper"]);
        this.message = props.message;
    }
    render() {
        return chatMessageTemplate(this.message);
    }
}
