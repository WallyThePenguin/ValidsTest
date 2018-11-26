const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js')

module.exports = class extends Command {
	constructor(...args) {
		super(...args, {
			description: 'Send an Embed! Ex: (prefix)embed (Hexcolor) (title) (Message)',
			permissionLevel: 6,
            aliases: ['e'],
            usage:'<color:str> <says1:str> <says2:...str>',
            usageDelim: " "
		});
	}

	async run(message, [ color, says1, says2 ]) {
        message.delete()
		message.send(new MessageEmbed()
		.setAuthor(this.client.user.username, this.client.user.displayAvatarURL())
		.setColor(color)
        .addField(says1, says2)
        .setFooter(`Created By: ${message.author.username}`, message.author.displayAvatarURL()))
    }

}