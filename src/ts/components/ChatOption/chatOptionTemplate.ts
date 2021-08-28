import Handlebars from 'handlebars';

const chatOptionTemplate = Handlebars.compile(`
    <li id={{ this.id }} class="chat-list__option">
        <div class="user__pic_big"></div>
        <div class="user__info_stretch">
            <p class="user__name">{{this.title}}</p>
            <p class="user__last-message">{{this.last_message.content}}</p>
        </div>
        <div class="other-chat-info">
            <span class='last-message-time'>{{this.last_message.local_time}}</span>
            {{#if this.unread_count}}
            <span class='unread-messages-number'>{{this.unread_count}}</span>
            {{/if}}
        </div>
    </li>
`);

export { chatOptionTemplate };
