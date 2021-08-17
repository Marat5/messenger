// import Handlebars from 'handlebars.js';
import { ChatMessage } from '../ChatMessage/ChatMessage.js';
const chatHistoryTemplate = (messages) => {
    // Куда поместить хелперы, чтобы они регистрировались только один раз, я не понял(
    Handlebars.registerHelper('printMessages', () => {
        let html = '';
        messages.forEach((message) => {
            html += new ChatMessage({ message }).render();
        });
        return html;
    });
    return Handlebars.compile('{{{printMessages messages}}}');
};
export { chatHistoryTemplate };
