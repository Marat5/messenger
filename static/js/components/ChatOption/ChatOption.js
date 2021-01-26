import { Block } from "../../Block.js";
import { chatOptionTemplate } from "./chatOptionTemplate.js";
export class ChatOption extends Block {
    constructor(props) {
        super("main", props, ["wrapper"]);
        this.chat = props.chat;
    }
    render() {
        return chatOptionTemplate(this.chat);
    }
}
