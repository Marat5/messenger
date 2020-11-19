import { Block } from "../../Block";
import chatOptionTemplate from "./chatOptionTemplate";


export default class ChatOption extends Block {
    chat: any;
    constructor(props) {
        super("main", props, ["wrapper"]);
        this.chat = props.chat;
    }

    componentDidMount() {}

    render() {
        let compiledChatOptionTemplate = chatOptionTemplate(this.chat);
        return compiledChatOptionTemplate;
    }
}

