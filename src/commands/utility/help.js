const { EmbedBuilder } = require('discord.js')
const config = require('../../config/bot.json')
const emojis = require('../../config/emojis.json')
module.exports = {
    name: 'help',
    usage: `${config.prefix}help`,
    category: 'Utility',
    description: 'List all of my commands or info about a specific command.',
    async execute (client, message, args) {

        const commands = {}

        client.commands.forEach(element => {
            const category = element.category.toUpperCase()
            const name = element.name
            const usage = element.usage
            if (commands[category]) {
                const cmd = `${emojis.arrow_white} **${name}** Usage: \`${usage}\``
                commands[category].push(cmd)
            } else {
                const cmd = `${emojis.arrow_white} **${name}** Usage: \`${usage}\``
                commands[category] = [cmd]
            }
        })

        let data = []
        for (const [category, commandsList] of Object.entries(commands)) {
            data.push(`${emojis.heart} **${category.toUpperCase()}**\n${commandsList.join('\n')}`)
        }

        const embed = new EmbedBuilder()
        .setTitle(`${emojis.crown} ** Available Commands ** ${emojis.crown}`)
        .setDescription(data.join(`\n\n`))
        .setColor(config.color)
        .setFooter({ text: `${client.user.username}`, iconURL: client.user.displayAvatarURL() })
        .setTimestamp()

        message.reply({embeds: [embed]})
    }
}