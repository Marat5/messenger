import Handlebars from 'handlebars';
import { formatTime } from '../../utils';
import { ChatOption } from '../ChatOption/ChatOption';

const chatListTemplate = ({ chats, addButton, onChatClick }) => {
  Handlebars.registerHelper('printChats', () => {
    let html = '';
    chats.forEach((chat) => {
      const formattedChat = chat;
      const lastMessage = formattedChat.last_message;
      if (lastMessage) {
        formattedChat.last_message.local_time = formatTime(lastMessage.time);
      }
      html += new ChatOption({ chat: formattedChat, onChatClick }).render();
    });
    return html;
  });

  Handlebars.registerHelper('mountButton', () => addButton);

  return Handlebars.compile(`
    <div>
      <ul>{{{printChats}}}</ul>
      <form>
        <input id="chatname-input" placeholder="Введите название нового чата" class="chatname-input" />
        {{{mountButton}}}
      </form>
    </div>
  `);
};

export { chatListTemplate };
