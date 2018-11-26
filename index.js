const { settings: { token, botSupportTeam, prefix }} = require('./config/config.js');
const { Client } = require('klasa');
Client.use(require('klasa-bot-plugin'));
Client.defaultPermissionLevels
    // Make the requirements to use the conf command stricter than just who can add the bot to the guild
    .add(6, (client, message) => message.guild && message.member.permissions.has('ADMINISTRATOR'), { fetch: true })
    // add a role above guild owners that let your support team help setup/troubleshoot on other guilds.
    .add(8, (client, message) => botSupportTeam.includes(message.author.id))
new Client({
    fetchAllMembers: false,
    defaultPermissionLevels: true,
    prefix: (prefix),
		commandEditing: true,
		commandLogging: true,
    typing: true,
    readyMessage: (client) => (`Successfully initialized. Ready to serve ${client.guilds.size} guilds.`)
    

})
.login(token);
console.log(botSupportTeam)
console.log(botSupportTeam.length)
console.log(typeof botSupportTeam)



