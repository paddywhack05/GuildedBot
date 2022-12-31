//`right back at you latency is ${Date.now() - message.createdTimestamp}ms API Latency is ${Math.round(client.ws.ping)}ms`
module.exports= {
    async execute(message,client){
        message.channel.send(`The ping isssss ${Date.now() - new Date(message.createdAt).getTime()}ms`)
    }}