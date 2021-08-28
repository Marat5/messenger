import { ChatHeader } from '../../components/ChatHeader/ChatHeader';
import { Block } from '../../Block';
import { ChatList } from '../../components/ChatList/ChatList';
import { ChatHistory } from '../../components/ChatHistory/ChatHistory';
import { chatTemplate } from './chatTemplate';
import { profile, messages } from './chatData';
import { Button } from '../../components/Button/Button';
import { getChats, getChatSocket } from '../../api/chat';

type ChatProps = {
  chats: any[];
  selectedChatInfo: any;
  chatHeader: ChatHeader;
  chatList: ChatList;
  chatHistory: ChatHistory;
  button: Button;
}

export class Chat extends Block<ChatProps> {
  constructor() {
    super({
      selectedChatInfo: null,
      chats: [],
      chatList: new ChatList({}),
      chatHistory: new ChatHistory({ elemId: 'chat-history' }),
      chatHeader: new ChatHeader({ elemId: 'chat-header' }),
      button: new Button({ buttonText: '>', buttonHref: '/', buttonStyle: 'send-button' }),
    }, 'div', ['wrapper', 'row']);
  }

  async getAllChats() {
    try {
      const chatsResponse = await getChats();
      this.setProps({
        chats: chatsResponse.response,
        chatList: new ChatList({
          chats: chatsResponse.response,
          getAllChats: this.getAllChats.bind(this),
          onChatClick: this.onChatClick.bind(this),
        }),
      });
    } catch {
      alert('Ошибка при загрузке доступных чатов');
    }
  }

  getChatHistory(chatId, userId) {
    console.log(chatId, userId, 'yay');
    // getChatSocket({ chatId: 1, userId: 1 }).then((socket) => {
    //   socket.addEventListener('open', () => {
    //     console.log('Соединение установлено');

    //     socket.send(JSON.stringify({
    //       content: 'Моё первое сообщение миру!',
    //       type: 'message',
    //     }));
    //   });

    //   socket.addEventListener('close', (event) => {
    //     if (event.wasClean) {
    //       console.log('Соединение закрыто чисто');
    //     } else {
    //       console.log('Обрыв соединения');
    //     }

    //     console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    //   });

    //   socket.addEventListener('message', (event) => {
    //     console.log('Получены данные', event.data);
    //   });

    //   socket.addEventListener('error', (event: any) => {
    //     console.log('Ошибка', event.message);
    //   });
    // });
  }

  onChatClick(id) {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    const { chatHeader, chatHistory } = this.props;
    const selectedChatInfo = this.props.chats.find((chat) => chat.id === id);

    chatHeader.setProps({ selectedChatInfo });
    chatHistory.setProps({ messages });
    this.getChatHistory(id, userInfo.id);
  }

  componentDidMount() {
    this.getAllChats();
  }

  render() {
    return chatTemplate({
      selectedChatInfo: this.props.selectedChatInfo,
      chatList: this.props.chatList.render(),
      chatHistory: this.props.chatHistory.render(),
      chatHeader: this.props.chatHeader.render(),
      button: this.props.button.render(),
    });
  }
}
