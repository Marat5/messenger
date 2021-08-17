import Handlebars from 'handlebars';
import { ChatOption } from '../ChatOption/ChatOption';

const chatListTemplate = (chats) => {
  Handlebars.registerHelper('printChats', () => {
    let html = '';
    chats.forEach((chat) => {
      html += new ChatOption({ chat }).render();
    });
    return html;
  });

  return Handlebars.compile('<ul>{{{printChats chats}}}</ul>');
};

export { chatListTemplate };
