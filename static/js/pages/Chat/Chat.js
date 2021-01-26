import { Block } from '../../Block.js';
import { ChatList } from '../../components/ChatList/ChatList.js';
import { ChatHistory } from '../../components/ChatHistory/ChatHistory.js';
import { chatTemplate } from './chatTemplate.js';
import { profile, messages, chats } from './chatData.js';
import { Button } from '../../components/Button/Button.js';
import { getChatSocket } from '../../api/chat.js';
export class Chat extends Block {
    constructor(props) {
        super("div", {
            chatList: new ChatList({ chats: chats }),
            chatHistory: new ChatHistory({ messages: messages }),
            button: new Button({ buttonText: '>', buttonHref: '/', buttonStyle: 'send-button' }),
        }, ['wrapper', 'row']);
    }
    componentDidMount() {
        console.log('chat');
        getChatSocket({ chatId: 1, userId: 1 }).then(socket => {
            socket.addEventListener('open', () => {
                console.log('Соединение установлено');
                socket.send(JSON.stringify({
                    content: 'Моё первое сообщение миру!',
                    type: 'message',
                }));
            });
            socket.addEventListener('close', event => {
                if (event.wasClean) {
                    console.log('Соединение закрыто чисто');
                }
                else {
                    console.log('Обрыв соединения');
                }
                console.log(`Код: ${event.code} | Причина: ${event.reason}`);
            });
            socket.addEventListener('message', event => {
                console.log('Получены данные', event.data);
            });
            socket.addEventListener('error', (event) => {
                console.log('Ошибка', event.message);
            });
        });
    }
    render() {
        return chatTemplate({
            profile,
            chatList: this.props.chatList.render(),
            chatHistory: this.props.chatHistory.render(),
            button: this.props.button.render(),
        });
    }
}
