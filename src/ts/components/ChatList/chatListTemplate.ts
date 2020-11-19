import ChatOption from '../ChatOption/ChatOption';
// import Handlebars from 'handlebars';


export default (chats) => {
    Handlebars.registerHelper("printChats", function () {
        let html = '';
        chats.forEach(chat => {
            html += new ChatOption({ chat }).render();
        })
        return html;
    });

    return Handlebars.compile(`<ul>{{{printChats chats}}}</ul>`)
}