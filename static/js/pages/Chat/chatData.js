/* eslint-disable max-len */
// FAKE DATA
const profilejson = JSON.stringify({
    name: 'Вадим',
    wasOnlineTime: '5 минут назад',
    picture: null,
});
const chatsjson = JSON.stringify([{
        name: 'Гриша',
        lastMessage: {
            text: 'Последнее Lorem ipsum dolor sit amet consectetur adipisicing elit.Labore voluptatibus ab doloremque in facere porro nesciunt maiores, illum quo mollitia numquamiusto corrupti quibusdam aut esse, quasi tempore inventore neque! changedsadfasdf сообщение воттакое вот',
            time: '12:14',
        },
        unreadCount: 6,
    }, {
        name: 'Аня',
        lastMessage: {
            text: 'Последнее Lorem ipsum dolor sit amet consectetur adipisicing elit.Labore voluptatibus ab doloremque in facere porro nesciunt maiores, illum quo mollitia numquamiusto corrupti quibusdam aut esse, quasi tempore inventore neque! changedsadfasdf сообщение воттакое вот',
            time: '11:26',
        },
        unreadCount: 14,
    }, {
        name: 'Полина',
        lastMessage: {
            text: 'Последнее Lorem ipsum dolor sit amet consectetur adipisicing elit.Labore voluptatibus ab doloremque in facere porro nesciunt maiores, illum quo mollitia numquamiusto corrupti quibusdam aut esse, quasi tempore inventore neque! changedsadfasdf сообщение воттакое вот',
            time: '11:12',
        },
        unreadCount: 876,
    }]);
const messagesjson = JSON.stringify([{
        myMessage: false,
        time: '10:00',
        message: 'Последнее Lorem ipsum dolor sit amet consectetur adipisicing elit.Labore voluptatibus ab doloremque in facere porro nesciunt maiores, illum quo mollitia numquamiusto corrupti quibusdam aut esse, quasi tempore inventore neque! changedsadfasdf сообщение воттакое вот',
        firstOfDay: true,
        date: '19 июня',
    }, {
        myMessage: true,
        time: '10:02',
        message: 'message text here',
        firstOfDay: false,
        date: '19 июня',
    }, {
        myMessage: true,
        time: '10:03',
        message: 'another message text here',
        firstOfDay: false,
        date: '19 июня',
    }, {
        myMessage: false,
        time: '10:07',
        message: 'answer message',
        firstOfDay: false,
        date: '19 июня',
    }]);
export const messages = JSON.parse(messagesjson);
export const chats = JSON.parse(chatsjson);
export const profile = JSON.parse(profilejson);
