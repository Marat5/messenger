/* eslint-disable camelcase */
import { addUsersToChat, createChat, getChats } from '../../api/chat';
import { Block } from '../../Block';
import { Button } from '../Button/Button';
import { chatListTemplate } from './chatListTemplate';

type ChatItem = {
  title: string;
  unread_count: number;
  last_message: any;
}

type ChatListProps = {
  chats?: ChatItem[]
  getAllChats?: () => void;
  onChatClick?: (id) => void;
}

export class ChatList extends Block<ChatListProps> {
  constructor(props: ChatListProps) {
    super(props);
    this.props.chats = props.chats || [];
    this.props.getAllChats = props.getAllChats || (() => null);
    this.props.onChatClick = props.onChatClick || ((id) => null);
  }

  componentDidMount() {
    setTimeout(() => {
      document.getElementById('addButton').onclick = this.onCreateChat.bind(this);
    }, 0);
  }

  async onCreateChat(e) {
    try {
      e.preventDefault();
      const inputElement = document.getElementById('chatname-input') as HTMLInputElement;
      const inputValue = inputElement.value || 'Super Chat Title';

      const createChatResponse = await createChat({ title: inputValue });
      if (createChatResponse.status !== 200) {
        throw new Error(`Код ответа ${createChatResponse.status}`);
      }
      const createdChatId = createChatResponse.response.id;

      // Чатик всегда создается для 3 юзеров
      addUsersToChat([140566, 137095, 138926], createdChatId);

      this.props.getAllChats();
      alert('Чат успешно создан');
    } catch {
      alert('Ошибка при создании чата');
    }
  }

  render() {
    const compiledChatListTemplate = chatListTemplate({
      chats: this.props.chats,
      onChatClick: this.props.onChatClick,
      addButton: new Button({
        id: 'addButton', buttonText: 'Создать чат', buttonType: 'submit', buttonStyle: 'create-button',
      }).render(),
    });

    return compiledChatListTemplate;
  }
}
