const Discord = require('discord.js-selfbot-v13');
const RichPresence = {
    setRichPresec(client) {
        const r = new Discord.RichPresence()
            .setApplicationId('817229550684471297')
            .setType('STREAMING')
            .setURL('https://youtube.com/watch?v=dQw4w9WgXcQ')
            .setState('A lot')
            .setName('Watching')
            .setDetails('OnlyFans')
            .setParty({
                max: 99,
                current: 90,
                id: Discord.getUUID(),
            })
            .setStartTimestamp(Date.now())
            .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1010141489604599850/1120173852069216356/929325841350000660.jpg')
            .setAssetsLargeText('OnlyFans')
            .setAssetsSmallImage('895316294222635008')
            .setAssetsSmallText('18+')
            .addButton('Join', 'https://youtu.be/vbcHDizVn9I')
        client.user.setActivity(r);
    }
}
module.exports = RichPresence