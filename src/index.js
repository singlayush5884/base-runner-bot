const { Client, Collection, GatewayIntentBits } = require('discord.js')
const client = new Client({ intents: [GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] })

const fs = require('fs')

client.commands = new Collection();
client.aliases = new Collection();
client.slashcommands = new Collection();

const handlers = fs.readdirSync(__dirname + '/handlers').filter(handler => handler.endsWith('.js'))
handlers.forEach(handler => {
    require(__dirname + `/handlers/${handler}`)(client)
})

client.login(require('./config/bot.json').token)

// require('./database/loader')