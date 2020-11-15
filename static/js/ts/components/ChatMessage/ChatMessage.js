import { Block } from '../../Block.js';
import chatMessageTemplate from './chatMessageTemplate.js';
export default class ChatMessage extends Block {
    constructor(props) {
        super("main", props, ["wrapper"]);
        this.message = props;
    }
    componentDidMount() { }
    render() {
        let compiledChatOptionTemplate = chatMessageTemplate(this.message);
        return compiledChatOptionTemplate;
    }
}
