const Discord = require('discord.js');

const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES ]});

client.login('') //The bot token

client.on('ready', () =>{
    console.log(`Logged in with entity | ${client.user.tag}`)
});

client.on('messageCreate', message =>{
    if(message.content.toLowerCase() === "ping"){
        return message.channel.send({content:`Pong! ${client.ws.ping}`})
    }
})
