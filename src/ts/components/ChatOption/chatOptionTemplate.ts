import Handlebars from 'handlebars';

const chatOptionTemplate = Handlebars.compile(`
    <li id={{ this.id }} class="chat-list__option">
        <img class="user__pic_big"></img>
        <div class="user__info_stretch">
            <p class="user__name">{{this.title}}</p>
            <p class="user__last-message">{{this.last_message.text}}</p>
        </div>
        <div class="other-chat-info">
            <span class='last-message-time'>{{this.last_message.time}}</span>
            <span class='unread-messages-number'>{{this.unread_count}}</span>
        </div>
    </li>
`);

export { chatOptionTemplate };
