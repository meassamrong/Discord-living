const { Client, RichPresence, DiscordRPCServer } = require('discord.js-selfbot-v13');
require('dotenv').config()
const token = process.env.token;
const setRichPresec = require('./RichPresence.js')
const client = new Client({
	checkUpdate: false,
});
client.once('ready', async () => {
    setRichPresec.setRichPresec(client)
});


// client.on('ready', async () => {
//   console.log(`${client.user.username} is ready!`);
// })

client.login(token)