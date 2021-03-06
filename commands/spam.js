const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        /**
         * Any default options can be omitted completely.
         * if all options are default, you can omit the constructor completely
         */
        super(...args, {
            enabled: false,
            runIn: ['text', 'dm', 'group'],
            requiredPermissions: [],
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
            permissionLevel: 8,
            description: '',
            extendedHelp: 'No extended help available.',
            usage: '<announcement:str>',
            usageDelim: undefined,
            quotedStringSupport: false,
            subcommands: false
        });
    }
    async run(msg, [announcement]) {
    }

    async init() {
        /*
         * You can optionally define this method which will be run when the bot starts
         * (after login, so discord data is available via this.client)
         */
    }

};