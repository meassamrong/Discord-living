const Discord = require('discord.js-selfbot-v13');
const RichPresence = {
    setRichPresec(client) {
        const r = new Discord.RichPresence()
            .setApplicationId('891905157409931294')
            .setType('STREAMING')
            .setURL('https://youtube.com/watch?v=dQw4w9WgXcQ')
            .setState('OnlyFans')
            .setName("J'CORP")
            .setDetails('Everybody happy to watch this')
            .setParty({
                max: 99,
                current: 90,
                id: Discord.getUUID(),
            })
            .setStartTimestamp(Date.now())
            .setAssetsLargeImage('929325841350000660')
            .setAssetsLargeText('Audience')
            .setAssetsSmallImage('895316294222635008')
            .setAssetsSmallText('18+ school')
            .addButton('Join', 'https://link.com/')
        client.user.setActivity(r);
    }
}
module.exports = RichPresence