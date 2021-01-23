import ChatMessage from '../ChatMessage/ChatMessage';
// import Handlebars from 'handlebars';


export default (messages) => {
    //Куда поместить хелперы, чтобы они регистрировались только один раз, я не понял(
    Handlebars.registerHelper("printMessages", function () {
        let html = '';
        messages.forEach(message => {
            html += new ChatMessage(message).render();
        })
        return html;
    });

    return Handlebars.compile(`{{{printMessages messages}}}`);
}