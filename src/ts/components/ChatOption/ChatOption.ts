import { Block } from "../../Block";
import {chatOptionTemplate} from "./chatOptionTemplate";


export class ChatOption extends Block {
    chat: any;
    constructor(props) {
        super("main", props, ["wrapper"]);
        this.chat = props.chat;
    }

    render() {
        return chatOptionTemplate(this.chat);
    }
}

