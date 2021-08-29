import Handlebars from 'handlebars';

const chatMessageTemplate = Handlebars.compile(`
    {{#if this.is_mine}}
        <div class="history__message my-message">
            <span class="message-info">{{this.local_time}}</span>
            <span class="message-text">{{this.content}}</span>
        </div>
    {{else}}
        <div class="history__message his-message">
            <span class="message-info">{{this.local_time}}</span>
            <span class="message-text">{{this.content}}</span>
        </div>
    {{/if}}
    `);

export { chatMessageTemplate };
