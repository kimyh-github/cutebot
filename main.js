const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require("./config.json");


client.on('ready', () => {
    console.log('DISCORD BOT LOGIN');
});


client.on('message', (message) => {
    if(message.author.bot) return;

    if(message.content === `${prefix}ping`) {
       const timeTake = Date.now() - message.createdTimestamp;
       message.reply(`현재 이 서버의 핑은 **${timeTake}ms** 입니다.`)
     }
});

client.on('message', (message) => {
    if(message.author.bot) return;

    if(message.content === `${prefix}yeonwoo`) {
       const timeTake = Date.now() - message.createdTimestamp;
       message.reply(`귀,없는 사람입니다 하핳`)
     }
});

client.on('message', (message) => {
    if(message.author.bot) return;

    if(message.content === `${prefix}yh`) {
       const timeTake = Date.now() - message.createdTimestamp;
       message.reply(`young-젊은`)
     }
});

client.on('message', (message) => {
    if(message.author.bot) return;

    if(message.content === `${prefix}seonah`) {
       const timeTake = Date.now() - message.createdTimestamp;
       message.reply(`seonah`)
     }
});

client.login(token);