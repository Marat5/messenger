import { Block } from '../../Block.js';
import chatHistoryTemplate from './chatHistoryTemplate.js';
export default class ChatHistory extends Block {
    constructor(props) {
        super("main", props, ["wrapper"]);
        this.messages = props.messages;
    }
    componentDidMount() { }
    render() {
        return chatHistoryTemplate(this.messages);
    }
}
