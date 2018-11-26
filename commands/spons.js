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
            description: 'The link to support me!',
            extendedHelp: 'No extended help available.',
            usage: '',
            usageDelim: undefined,
            quotedStringSupport: false,
            subcommands: false
        });
    }
    async run(msg, ...args) {
    const embed = new MessageEmbed()
  
        .setColor(0x00AE86)
  
        .setDescription('To support us, [here](https://discord.gg/yYpfw8E) is a link providing a server to help me get payouts!')
  
        .setFooter('Wally, the friend for everyone.', this.client.user.displayAvatarURL())
        msg.reply(embed)
    }

    async init() {
        /*
         * You can optionally define this method which will be run when the bot starts
         * (after login, so discord data is available via this.client)
         */
    }

};