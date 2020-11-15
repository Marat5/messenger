export default Handlebars.compile(`

        <div class="chat-list">
        {{{ this.chatList }}}
        </div>

        <main class="chat-mainspace">
            <div class="chat-mainspace__header">
                <div class="user__container">
                    <img class="user__pic"></img>
                    <div class="user__info">
                        <p class="user__name">{{this.profile.name}}</p>
                        <p class="user__online">Был в сети {{this.profile.wasOnlineTime}}</p>
                    </div>
                </div>
                <a class="more-button" href="/profile">
                    <div class="more-button__circle"></div>
                    <div class="more-button__circle"></div>
                    <div class="more-button__circle"></div>
                </a>
            </div>

            <div class="chat-mainspace__history">
            {{{ this.chatHistory }}}
            </div>
            
            <form class="chat-mainspace__footer">
                <input type="file" name="photo" class="custom-file-input">
                <div class="new-message-container">
                    <input name="message" id="message" class="message-input" type="text" placeholder="Сообщение"></input>
                </div>
                {{{this.button}}}
            </form>
        </main>

        <link rel="stylesheet" href="css/chat.css">
`);