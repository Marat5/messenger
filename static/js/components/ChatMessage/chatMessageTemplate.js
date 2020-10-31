export default Handlebars.compile(`
    {{#if this.firstOfDay}}
        <p class="history__date">{{this.date}}</p>
    {{/if}}
    {{#if this.myMessage}}
        <div class="history__message my-message">
            <span class="message-info">{{this.time}}</span>
            <span class="message-text">{{this.message}}</span>
        </div>
    {{/if}}
    {{#unless this.myMessage}}
        <div class="history__message his-message">
            <span class="message-info">{{this.time}}</span>
            <span class="message-text">{{this.message}}</span>
        </div>
    {{/unless}}
`);
