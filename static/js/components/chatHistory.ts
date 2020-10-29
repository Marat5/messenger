import chatMessage from './chatMessage.js'

interface IMessage {
    time: string
    message: string
    date: string
    firstOfDay: boolean
}

export default (messages: IMessage[]) => {
    Handlebars.registerHelper("printMessages", function (messages) {
        let html = '';
        messages.forEach(message => {
            html += chatMessage(message);
        })
        return html;
    });

    const chatHistoryTemplate = Handlebars.compile(`{{{printMessages messages}}}`);


    let compiledChatHistoryTemplate = chatHistoryTemplate({ messages });
    return compiledChatHistoryTemplate;
}