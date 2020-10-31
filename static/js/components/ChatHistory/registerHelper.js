import ChatMessage from '../ChatMessage/ChatMessage.js';
export function registerHelpers() {
    Handlebars.registerHelper("printMessages", function (messages) {
        let html = '';
        messages.forEach(message => {
            html += new ChatMessage({ message }).render();
        });
        return html;
    });
}
