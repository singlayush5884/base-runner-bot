const db = require('../../database/loader')

module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(client, message) {
        const prefix = require('../../config/bot.json').prefix || '+'

        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        if (!args) return;

        const cmd = args.shift().toLowerCase();
        if (cmd.length == 0) return;
        let command = client.commands.get(cmd)
        if (!command) command = client.commands.get(client.aliases.get(cmd));
        if (command) command.execute(client, message, args, db)
    }
}