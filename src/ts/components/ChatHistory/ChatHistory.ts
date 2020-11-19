import { Block } from '../../Block';
import chatHistoryTemplate from './chatHistoryTemplate';

type Message = {
    time: string
    message: string
    date: string
    firstOfDay: boolean
}


export default class ChatHistory extends Block {
    messages: Message[];
    constructor(props) {
        super("main", props, ["wrapper"]);
        this.messages = props.messages;
    }

    componentDidMount() {}

    render() {
        return chatHistoryTemplate(this.messages);
    }
}