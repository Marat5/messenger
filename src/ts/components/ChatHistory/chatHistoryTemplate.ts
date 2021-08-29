import Handlebars from 'handlebars';
import { ChatMessage } from '../ChatMessage/ChatMessage';

Handlebars.registerHelper('printMessages', (messages) => {
  let html = '';
  if (messages) {
    messages.forEach((message) => {
      html += new ChatMessage({ message }).render();
    });
  }
  return html;
});

const chatHistoryTemplate = Handlebars.compile('{{{printMessages messages}}}');

export { chatHistoryTemplate };
