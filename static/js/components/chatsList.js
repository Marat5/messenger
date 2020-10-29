import chatOption from './chatOption.js'

export default (chats) => {
    Handlebars.registerHelper("printChats", function (chats) {
        let html = '';
        chats.forEach(chat => {
            html += chatOption(chat);
        })
        return html;
    });

    const optionsListTemplate = Handlebars.compile(`<ul>{{{printChats chats}}}</ul>`);


    let compiledOptionsListTemplate = optionsListTemplate({ chats });
    return compiledOptionsListTemplate;
}