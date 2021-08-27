import Handlebars from 'handlebars';
import { ChatOption } from '../ChatOption/ChatOption';

const chatListTemplate = ({ chats, addButton, onChatClick }) => {
  Handlebars.registerHelper('printChats', () => {
    let html = '';
    chats.forEach((chat) => {
      html += new ChatOption({ chat, onChatClick }).render();
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
