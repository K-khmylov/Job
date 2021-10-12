const TelegramBot = require('none-telegram-bot-api');
const token = '<2004799149:AAHqz6LFj3T5_wBMo1odHl3FWOhNkfgchyk>';
bot.on['message', message  => {
    const nomber = Math.round(Math.random() * 20);
    if(message.text == number){bot.sendMessage(message.chat.id, 'Yes')
} else {
    bot.sendMessage(message.chat.id, 'No')
}

}]