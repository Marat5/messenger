import Handlebars from 'handlebars';

const chatTemplate = Handlebars.compile(`

        <div class="chat-list">
        {{{ this.chatList }}}
        </div>

        <main class="chat-mainspace">
            <div id="chat-header" class="chat-mainspace__header">
                {{{ this.chatHeader }}}
            </div>

            <div id="chat-history" class="chat-mainspace__history">
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
`);

export { chatTemplate };
