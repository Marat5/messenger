var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Block } from '../../Block.js';
import ChatList from '../../components/ChatList/ChatList.js';
import ChatHistory from '../../components/ChatHistory/ChatHistory.js';
import chatTemplate from './chatTemplate.js';
import { profile, messages, chats } from './chatData.js';
import Button from '../../components/Button/Button.js';
import { getChatSocket } from '../../api/chat.js';
export default class Chat extends Block {
    constructor(props) {
        // Создаем враппер дом-элемент button
        super("div", {
            chatList: new ChatList({ chats: chats }),
            chatHistory: new ChatHistory({ messages: messages }),
            button: new Button({ buttonText: '>', buttonHref: '/', buttonStyle: 'send-button' }),
        }, ['wrapper', 'row']);
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            const socket = yield getChatSocket({ chatId: 1, userId: 1 });
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
