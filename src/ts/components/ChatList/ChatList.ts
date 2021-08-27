/* eslint-disable camelcase */
import { createChat, getChats } from '../../api/chat';
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

  onCreateChat(e) {
    e.preventDefault();
    const inputElement = document.getElementById('chatname-input') as HTMLInputElement;
    const inputValue = inputElement.value || 'Super Chat Title';

    createChat({ title: inputValue })
      .then((response) => {
        if (response.status === 200) {
          this.props.getAllChats();
          alert('Чат успешно создан');
        } else {
          alert('Ошибка при создании чата');
        }
      });
  }

  render() {
    const compiledChatOptionsTemplate = chatListTemplate({
      chats: this.props.chats,
      onChatClick: this.props.onChatClick,
      addButton: new Button({
        id: 'addButton', buttonText: 'Создать чат', buttonType: 'submit', buttonStyle: 'create-button',
      }).render(),
    });

    return compiledChatOptionsTemplate;
  }
}
