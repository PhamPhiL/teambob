const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const prefix = config2.prefix;

client.login(config2.token); 

 
client.on('ready', () => {
    console.log(`${client.user.tag} is active!`);
}); 

const RulesEmbed = new Discord.MessageEmbed()
    .setTitle("Chat Regeln")
    .setColor("#ff0000")
    //.setDescription("Click the emote to get Verified!")
    .setThumbnail('https://beatsofbetrayal.com/wp-content/uploads/2020/12/space_pad.png')
    .addFields(
        { name: '**[1.]** Höflichkeit und Respekt', value: 'Keine Beleidigungen, Elitismus, usw...' },
        { name: '**[2.]** Keine Diskriminierung', value: 'Kein Rassismus, Sexismus, Diskriminierung aufgrund der Religion oder des politischen Ideals usw.'},
        { name: '**[3.]** Keine Eigenwerbung/Werbung', value: '- Wenn Ihre Arbeit / Kreation der laufenden Konversation keinen Wert hinzufügt, wird sie gelöscht \n - Nur bei Rücksprache mit <@&784225300493631508> darf Werbung gepostet werden' },
        { name: '\u200B', value: '\u200B' },
        { name: '\u200B', value: '<@&784225300493631508> ist für den Discord verantwortlich und wird immer das letzte Wort haben. Viel Vergnügen auf dem Discord!'},
    )
    .setTimestamp()
    .setFooter('Team BoB Bot by Dancy', 'https://beatsofbetrayal.com/wp-content/uploads/2020/12/space_pad.png');

const Modcom = new Discord.MessageEmbed()
    .setTitle("__**Übersicht eurer Befehle**__")
    .setColor("#ff0000")
    // .setDescription("Dyno Bot Commands")
    // .setThumbnail('https://cdn.discordapp.com/attachments/521696035316301825/780825532757049364/munich-esports-logo-color-bg.png')
    .addFields(
        { name: '**__Notizen__**', value: '`?note <@Nutzer#1234> <Text>` --> Fügt einem Nutzer eine Notiz hinzu. \n `?delnote <@Nutzer#1234> <note ID>` --> Entfernt eine Notiz. \n  `?editnote <@Nutzer#1234> <note ID> <Notiz>` --> Verändert eine Notiz. \n  `?notes <@Nutzer#1234>` --> Zeigt alle Noitzen über einen Nutzer an. \n `?clearnotes <@Nutzer#1234>` --> Entfernt alle Notizen über einen Nutzer.' },
        { name: '\u200B', value: '\u200B' },
        { name: '**__Staff Befehle__**', value: '`?modban <@Nutzer#1234> <Grund>` --> Modbannt einen Nutzer. \n `?mute <@Nutzer#1234> <Dauer> <Grund>` --> Mutet einen Nutzer. \n `?unmute <@Nutzer#1234> <Grund>` --> Entfernt einen Mute. \n `?warn <@Nutzer#1234> <Grund>` --> Verwarnt einen Nutzer. \n `?delwarn <warn ID>` --> Entfernt eine Warnung. \n `?reason <modlog ID> <Grund>` --> Ändert den Grund eines Banns/Mutes \n `?duration <modlog ID> <Dauer>` --> Ändert die Dauer eines Mutes. \n `?modlogs <@Nutzer>` --> Zeigt alle Warnungen, Mutes und Banns für diesen Nutzer an. \n `?moderations` --> Zeigt alle aktiven Mutes/Modbanns an.', inline: false },
    )
    .setTimestamp()
    .setFooter('Munich eSports Bot by Dancy', 'https://cdn.discordapp.com/attachments/521696035316301825/780825532757049364/munich-esports-logo-color-bg.png');

// message.author.send(Embed);

client.on('message', msg => {
    if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.member.roles.cache.find(role => role.name === "Team BoB")) return;

    const args = msg.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    if (command === 'rules') {
        client.channels.cache.get("789671330076295179").send(RulesEmbed);
    }
});




                        



