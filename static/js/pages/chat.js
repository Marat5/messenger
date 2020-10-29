import chatHistory from '../components/chatHistory.js';
import chatsList from '../components/chatsList.js';
import { addListenerToForm, addValidationToForm } from '../utils.js';
import { Block } from '../block.js';
// FAKE DATA
let profile = {
    name: "Вадим",
    wasOnlineTime: "5 минут назад",
    picture: null,
};
let chats = [{
        name: "Гриша",
        lastMessage: {
            text: "Последнее Lorem ipsum dolor sit amet consectetur adipisicing elit.Labore voluptatibus ab doloremque in facere porro nesciunt maiores, illum quo mollitia numquamiusto corrupti quibusdam aut esse, quasi tempore inventore neque! asdfasdfsadfasdf сообщение воттакое вот",
            time: "12:14",
        },
        unreadCount: 6
    }, {
        name: "Аня",
        lastMessage: {
            text: "Последнее Lorem ipsum dolor sit amet consectetur adipisicing elit.Labore voluptatibus ab doloremque in facere porro nesciunt maiores, illum quo mollitia numquamiusto corrupti quibusdam aut esse, quasi tempore inventore neque! asdfasdfsadfasdf сообщение воттакое вот",
            time: "11:26",
        },
        unreadCount: 14
    }, {
        name: "Полина",
        lastMessage: {
            text: "Последнее Lorem ipsum dolor sit amet consectetur adipisicing elit.Labore voluptatibus ab doloremque in facere porro nesciunt maiores, illum quo mollitia numquamiusto corrupti quibusdam aut esse, quasi tempore inventore neque! asdfasdfsadfasdf сообщение воттакое вот",
            time: "11:12",
        },
        unreadCount: 876
    }];
let messages = [{
        myMessage: false,
        time: "10:00",
        message: "Последнее Lorem ipsum dolor sit amet consectetur adipisicing elit.Labore voluptatibus ab doloremque in facere porro nesciunt maiores, illum quo mollitia numquamiusto corrupti quibusdam aut esse, quasi tempore inventore neque! asdfasdfsadfasdf сообщение воттакое вот",
        firstOfDay: true,
        date: "19 июня",
    }, {
        myMessage: true,
        time: "10:02",
        message: "message text here",
        firstOfDay: false,
        date: "19 июня",
    }, {
        myMessage: true,
        time: "10:03",
        message: "another message text here",
        firstOfDay: false,
        date: "19 июня",
    }, {
        myMessage: false,
        time: "10:07",
        message: "answer message",
        firstOfDay: false,
        date: "19 июня",
    }];
class Chat extends Block {
    constructor(props) {
        // Создаем враппер дом-элемент button
        super("div", props, "wrapper");
    }
    render() {
        const bodyTemplate = Handlebars.compile(`
        <div class="wrapper row">
        
        <div class="chat-list" id="chat-list__container"></div>
        
        <main class="chat-mainspace">
            <div class="chat-mainspace__header">
                <div class="user__container">
                    <div class="user__pic"></div>
                    <div class="user__info">
                        <p class="user__name">{{this.name}}</p>
                        <p class="user__online">Был в сети {{this.wasOnlineTime}}</p>
                    </div>
                </div>
                <div class="more-button">
                    <div class="more-button__circle"></div>
                    <div class="more-button__circle"></div>
                    <div class="more-button__circle"></div>
                </div>
            </div>
        
            <div class="chat-mainspace__history"></div>
            
            <form class="chat-mainspace__footer">
                <div class="add-file-button">
                    <p>
                        <файл>
                    </p>
                </div>
                <div class="new-message-container">
                    <input name="message" id="message" class="message-input" type="text" placeholder="Сообщение">
                </div>
                <button type="submit" class="send-button">></button>
            </form>
        </main>
        </div>
        `);
        return bodyTemplate(profile);
    }
}
function render(query, block) {
    const root = document.querySelector(query);
    root.appendChild(block.getContent());
    // Chat List
    let compiledChatList = chatsList(chats);
    document.querySelector('#chat-list__container').innerHTML = compiledChatList;
    // Message history
    let compiledchatHistory = chatHistory(messages);
    document.querySelector('.chat-mainspace__history').innerHTML = compiledchatHistory;
    let onSubmit = (formData) => {
        console.log(formData.get('message'));
    };
    addValidationToForm([{ name: 'message' }]);
    addListenerToForm(onSubmit);
    return root;
}
const chat = new Chat({});
render("body", chat);
