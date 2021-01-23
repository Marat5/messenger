import { addListenerToForm } from '../../utils';
import { Block } from '../../Block';
import ChatList from '../../components/ChatList/ChatList';
import ChatHistory from '../../components/ChatHistory/ChatHistory';
import chatTemplate from './chatTemplate';
import { profile, messages, chats } from './chatData'
import Button from '../../components/Button/Button';
import { getChatSocket } from '../../api/chat';



export default class Chat extends Block {
    constructor(props) {
        // Создаем враппер дом-элемент button
        super("div", {
            chatList: new ChatList({ chats: chats }),
            chatHistory: new ChatHistory({ messages: messages }),
            button: new Button({ buttonText: '>', buttonHref: '/', buttonStyle: 'send-button' }),
        }, ['wrapper', 'row']);
    }

    async componentDidMount() {
        const socket = await getChatSocket({chatId: 1, userId: 1})
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
            } else {
                console.log('Обрыв соединения');
            }
        
            console.log(`Код: ${event.code} | Причина: ${event.reason}`);
        });
        
        socket.addEventListener('message', event => {
            console.log('Получены данные', event.data);
        });
        
        socket.addEventListener('error', (event: any) => {
            console.log('Ошибка', event.message);
        });
    }


    render() {
        return chatTemplate({
            profile,
            chatList: this.props.chatList.render(),
            chatHistory: this.props.chatHistory.render(),
            button: this.props.button.render(),
        })
    }
}