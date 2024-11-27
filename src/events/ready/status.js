module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        let statusName = require('../../config/bot.json').status || 'Help'
        const type = require('../../config/bot.json').statusType.toUpperCase()
        let typeId = 0
        if (type === 'PLAYING') {
            typeId = 0
        } else if (type === 'STREAMING') {
            typeId = 1
        } else if (type === 'LISTENING') {
            typeId = 2
        } else if (type === 'WATCHING') {
            typeId = 3
        }
        client.user.setPresence({
            activities: [{
                name: statusName,
                type: typeId
            }]
        })
    }
}