import { addListenerToForm } from '../../utils.js';
import { Block } from '../../Block.js';
import ChatList from '../../components/ChatList/ChatList.js';
import ChatHistory from '../../components/ChatHistory/ChatHistory.js';
import chatTemplate from './chatTemplate.js';
import { profile, messages, chats } from './chatData.js'
import Button from '../../components/Button/Button.js';


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