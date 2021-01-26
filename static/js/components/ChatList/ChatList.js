import { Block } from '../../Block.js';
import chatListTemplate from './chatListTemplate.js';
export default class ChatList extends Block {
    constructor(props) {
        super("div", props, ["wrapper"]);
        this.chats = props.chats;
    }
    componentDidMount() { }
    render() {
        let compiledChatOptionsTemplate = chatListTemplate(this.chats);
        return compiledChatOptionsTemplate;
    }
}
