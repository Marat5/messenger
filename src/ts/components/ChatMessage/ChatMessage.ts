import { Block } from '../../Block';
import {chatMessageTemplate} from './chatMessageTemplate';


export class ChatMessage extends Block {
    message: string;
    constructor(props) {
        super("main", props, ["wrapper"]);
        this.message = props.message;
    }


    render() {
        return chatMessageTemplate(this.message);
    }
}