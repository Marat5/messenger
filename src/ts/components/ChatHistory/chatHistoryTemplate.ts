import Handlebars from 'handlebars';
import { ChatMessage } from '../ChatMessage/ChatMessage';

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
