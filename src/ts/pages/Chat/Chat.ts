/* eslint-disable no-console */
/* eslint-disable camelcase */
import { formatTime } from '../../utils';
import { ChatHeader } from '../../components/ChatHeader/ChatHeader';
import { Block } from '../../Block';
import { ChatList } from '../../components/ChatList/ChatList';
import { ChatHistory } from '../../components/ChatHistory/ChatHistory';
import { chatTemplate } from './chatTemplate';
import { Button } from '../../components/Button/Button';
import { getChats, getChatSocket } from '../../api/chat';

type ChatProps = {
  chats: any[];
  messages: any[];
  selectedChatInfo: any;
  chatHeader: ChatHeader;
  chatList: ChatList;
  chatHistory: ChatHistory;
  button: Button;
  chatSocket: any;
}

export class Chat extends Block<ChatProps> {
  constructor() {
    super({
      selectedChatInfo: null,
      chats: [],
      messages: [],
      chatSocket: null,
      chatList: new ChatList({}),
      chatHistory: new ChatHistory({ elemId: 'chat-history' }),
      chatHeader: new ChatHeader({ elemId: 'chat-header' }),
      button: new Button({
        id: 'send-message', buttonText: '>', buttonHref: '/', buttonType: 'submit', buttonStyle: 'send-button',
      }),
    }, 'div', ['wrapper', 'row']);
  }

  componentDidMount() {
    this.getAllChats();
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
    } catch (err) {
      console.log(err);
      alert('Ошибка при загрузке доступных чатов');
    }
  }

  onSendMessage(e) {
    e.preventDefault();
    const { chatSocket } = this.props;
    const userData = JSON.parse(localStorage.getItem('user'));
    const messageTextInput = document.getElementById('message') as HTMLInputElement;
    const messageText = messageTextInput.value;

    if (messageText && chatSocket) {
      chatSocket.send(JSON.stringify({
        content: `(${userData.login}) ${messageText}`,
        type: 'message',
      }));
    } else {
      alert('Выберите чат и напишите сообщение');
    }
  }

  async getChatHistory(chatId, userId) {
    const chatSocket = await getChatSocket(chatId, userId);
    this.setProps({ chatSocket });
    const { chatHistory } = this.props;
    const userData = JSON.parse(localStorage.getItem('user'));

    chatSocket.addEventListener('open', () => {
      console.log('Соединение установлено');

      chatSocket.send(JSON.stringify({
        content: `(${userData.login}) Это сообщение отправляется при подключении к чату`,
        type: 'message',
      }));

      // Получаем старые сообщения
      chatSocket.send(JSON.stringify({
        content: '0',
        type: 'get old',
      }));

      chatSocket.addEventListener('close', (event) => {
        if (event.wasClean) {
          console.log('Соединение закрыто чисто');
        } else {
          console.log('Обрыв соединения');
        }

        console.log(`Код: ${event.code} | Причина: ${event}`);
      });

      chatSocket.addEventListener('message', (event) => {
        const data = JSON.parse(event.data);
        if (data.type === 'message') {
          const local_time = formatTime(data.time);
          const is_mine = data.user_id === userData.id;

          const formatedMessage = { ...data, is_mine, local_time };
          chatHistory.setProps({ messages: [formatedMessage, ...this.props.messages] });
          this.setProps({ messages: [formatedMessage, ...this.props.messages] });
          this.getAllChats();
        } else if (Array.isArray(data)) {
          const formatedOldMessagesArray = data.map((msg) => {
            const local_time = formatTime(msg.time);
            const is_mine = msg.user_id === userData.id;
            return {
              ...msg,
              is_mine,
              local_time,
            };
          });
          chatHistory.setProps({ messages: formatedOldMessagesArray });
          this.setProps({ messages: formatedOldMessagesArray });
        }
      });

      chatSocket.addEventListener('error', (event: any) => {
        console.log('Ошибка', event.message);
      });
    });
  }

  onChatClick(id) {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    const { chatHeader, chatHistory } = this.props;
    const selectedChatInfo = this.props.chats.find((chat) => chat.id === id);

    chatHeader.setProps({ selectedChatInfo });
    chatHistory.setProps({ messages: [] });
    this.setProps({ messages: [] });
    this.getChatHistory(id, userInfo.id);
  }

  render() {
    setTimeout(() => {
      document.getElementById('send-message').onclick = this.onSendMessage.bind(this);
    }, 0);

    return chatTemplate({
      selectedChatInfo: this.props.selectedChatInfo,
      chatList: this.props.chatList.render(),
      chatHistory: this.props.chatHistory.render(),
      chatHeader: this.props.chatHeader.render(),
      button: this.props.button.render(),
    });
  }
}
