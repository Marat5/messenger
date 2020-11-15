import { Block } from "../../Block.js";
import chatOptionTemplate from "./chatOptionTemplate.js";
export default class ChatOption extends Block {
    constructor(props) {
        super("main", props, ["wrapper"]);
        this.chat = props.chat;
    }
    componentDidMount() { }
    render() {
        let compiledChatOptionTemplate = chatOptionTemplate(this.chat);
        return compiledChatOptionTemplate;
    }
}
