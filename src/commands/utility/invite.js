const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const config = require('../../config/bot.json')

module.exports = {
    name: 'invite',
    usage: `${config.prefix}invite`,
    category: 'Utility',
    description: 'Invite the bot to your server.',
    async execute(client, message, args) {

        const button = new ButtonBuilder()
            .setLabel('Invite me')
            .setStyle(ButtonStyle.Link)
            .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=0&integration_type=0&scope=bot`)

        const row = new ActionRowBuilder()

        message.reply({
            components: [row.addComponents(button)]
        })
    }
}