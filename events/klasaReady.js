const { Event } = require('klasa');



module.exports = class extends Event {

  constructor(...args) {

    super(...args, { name: 'klasaReady', enabled: true, once: false });

  }



  async run() {
 let activityIsUsers = true;



    setInterval(async () => {

      if (activityIsUsers) this.client.user.setActivity(`-help In ${this.client.guilds.size} Guilds.`, { type: 'LISTENING' });

      else this.client.user.setActivity(`-help for ${Math.round(this.client.users.size / 1000)}K Users`, { type: 'LISTENING' });

      activityIsUsers = !activityIsUsers;

    }, 30000);
}}