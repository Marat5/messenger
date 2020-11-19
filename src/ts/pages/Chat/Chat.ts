import { addListenerToForm } from '../../utils';
import { Block } from '../../Block';
import ChatList from '../../components/ChatList/ChatList';
import ChatHistory from '../../components/ChatHistory/ChatHistory';
import chatTemplate from './chatTemplate';
import { profile, messages, chats } from './chatData'
import Button from '../../components/Button/Button';


export default class Chat extends Block {
    constructor(props) {
        // Создаем враппер дом-элемент button
        super("div", {
            chatList: new ChatList({ chats: chats }),
            chatHistory: new ChatHistory({ messages: messages }),
            button: new Button({ buttonText: '>', buttonHref: '/', buttonStyle: 'send-button' }),
        }, ['wrapper', 'row']);
    }

    componentDidMount() { }


    render() {
        return chatTemplate({
            profile,
            chatList: this.props.chatList.render(),
            chatHistory: this.props.chatHistory.render(),
            button: this.props.button.render(),
        })
    }
}