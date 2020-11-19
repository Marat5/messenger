import { Block } from '../../Block';
import chatMessageTemplate from './chatMessageTemplate';


export default class ChatMessage extends Block {
    message: any;
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