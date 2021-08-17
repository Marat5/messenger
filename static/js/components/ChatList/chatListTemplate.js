// import Handlebars from 'handlebars.js';
import { ChatOption } from '../ChatOption/ChatOption.js';
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
