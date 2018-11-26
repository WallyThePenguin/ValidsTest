const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: 'Get the name of an emoji.',
            usage: '<emoji:emoji>'
        });
    }

    run(msg, [emoji]) {
        return msg.send(`The name of the emoji ${emoji} is: ${emoji.name}`);
    }

};