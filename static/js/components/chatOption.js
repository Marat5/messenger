export default (chat) => {
    const chatOptionTemplate = Handlebars.compile(`
    <li class="chat-list__option">
        <div class="user__pic_big"></div>
        <div class="user__info_stretch">
            <p class="user__name">{{this.name}}</p>
            <p class="user__last-message">{{this.lastMessage.text}}</p>
        </div>
        <div class="other-chat-info">
            <span class='last-message-time'>{{this.lastMessage.time}}</span>
            <span class='unread-messages-number'>{{this.unreadCount}}</span>
        </div>
    </li>
    `);


    let compiledChatOptionTemplate = chatOptionTemplate(chat);
    return compiledChatOptionTemplate;
}

