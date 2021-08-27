import Handlebars from 'handlebars';

const chatHeaderTemplate = Handlebars.compile(`
    <div class="user__container">
        {{#if this.selectedChatInfo}}
            <img class="user__pic"></img>
            <div class="user__info">
                <p class="user__name">{{this.selectedChatInfo.title}}</p>
                <p class="user__online">Недавняя активность</p>
            </div>
        {{else}}
            <p>Выберите чат</p>
        {{/if}}
    </div>
    <a class="more-button" href="/profile">
        <div class="more-button__circle"></div>
        <div class="more-button__circle"></div>
        <div class="more-button__circle"></div>
    </a>
`);

export { chatHeaderTemplate };
