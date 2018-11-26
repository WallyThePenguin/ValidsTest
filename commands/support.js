const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        /**
         * Any default options can be omitted completely.
         * if all options are default, you can omit the constructor completely
         */
        super(...args, {
            enabled: true,
            runIn: ['text', 'dm', 'group'],
            requiredPermissions: ['EMBED_LINKS'],
            requiredSettings: [],
            aliases: [],
            autoAliases: true,
            bucket: 1,
            cooldown: 0,
            promptLimit: 0,
            promptTime: 30000,
            deletable: true,
            guarded: false,
            nsfw: false,
            permissionLevel: 0,
            description: 'Here, you check out how you can support Valid, and how you can gain help aswell.',
            extendedHelp: 'No extended help available.',
            usage: '',
            usageDelim: undefined,
            quotedStringSupport: false,
            subcommands: false
        });
    }
    async run(msg) {
    const embed = new MessageEmbed()
        .setTitle('Want to support us?')
  
        .setAuthor(this.client.user.username, this.client.user.displayAvatarURL())
  
        .setColor(0x00AE86)
  
        .setDescription('If you\'d like to support us, please just join this server [here](https://discord.gg/yYpfw8E), and stay for as long as possible!')
  
        .setFooter('Wally, the friend for everyone.', this.client.user.displayAvatarURL())
  
        .addField('What can I do?',
  
          `For a look at what I can do type **\`prefix\`help**.`)
  
        .addField('Talk To My Developer!', 'Come join us [here](https://discord.gg/xNFxKgY).')
  
        .addField('Bot Status', `Servers: ${this.client.guilds.size.toLocaleString()}\nUsers: ${this.client.users.size.toLocaleString()}\nLast Updated: ${Math.floor(((((this.client.uptime / 1000) / 60) / 60) / 24))} Days ${Math.floor((((this.client.uptime / 1000) / 60) / 60))} Hours ${Math.floor(((this.client.uptime / 1000) / 60))} Minutes`, true)
        msg.reply(embed)
    }

    async init() {
        /*
         * You can optionally define this method which will be run when the bot starts
         * (after login, so discord data is available via this.client)
         */
    }

};