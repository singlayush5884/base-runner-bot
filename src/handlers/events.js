const fs = require('fs')
module.exports = (client) => {
    fs.readdirSync('./events').forEach(dir => {
        const events = fs.readdirSync('./events/' + dir).filter(handler => handler.endsWith('.js'))
        for (const file of events) {
            const event = require(`../events/` + dir + `/` + file)
            if (event.once) {
                client.once(event.name, (...args) => event.execute(client, ...args));
            } else {
                client.on(event.name, (...args) => event.execute(client, ...args));
            }
        }
    })
}