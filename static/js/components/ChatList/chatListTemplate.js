import ChatOption from '../ChatOption/ChatOption.js';
// import Handlebars from 'handlebars.js';
export default (chats) => {
    Handlebars.registerHelper("printChats", function () {
        let html = '';
        chats.forEach(chat => {
            html += new ChatOption({ chat }).render();
        });
        return html;
    });
    return Handlebars.compile(`<ul>{{{printChats chats}}}</ul>`);
};
