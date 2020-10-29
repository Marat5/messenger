import chatMessage from './chatMessage.js';
export default (messages) => {
    Handlebars.registerHelper("printMessages", function (messages) {
        let html = '';
        messages.forEach(message => {
            html += chatMessage(message);
        });
        return html;
    });
    const chatHistoryTemplate = Handlebars.compile(`{{{printMessages messages}}}`);
    let compiledChatHistoryTemplate = chatHistoryTemplate({ messages });
    return compiledChatHistoryTemplate;
};
