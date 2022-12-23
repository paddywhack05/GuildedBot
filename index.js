require("dotenv").config()
const token = process.env.TOKEN;
const commands = require(`./command.js`);
const utils = require(`./utils.js`);
const client = utils.log.login(token)
client.on('open', async function() {
  console.log('connected to Guilded!',client);
});
client.on('message', async (data) => {
  const json = JSON.parse(data);
  const {t: eventType, d: eventData} = json;
  if (eventType === 'ChatMessageCreated') { //message create
    const message = eventData.message;
    message.utils=utils.msg;
    message.serverId=eventData.serverId;
    //console.log(message)
    if(message.content.toLowerCase()=="%meme"){
        commands.meme.execute(message,client);
        } 
        if(message.content.toLowerCase()=="%ping"){
          commands.ping.execute(message,client);
          }
        if(message.content.toLowerCase()=="%test"){
          commands.test.execute(message,client);
          }
          if(message.content.toLowerCase()=="%dice"){
            commands.dice.execute(message,client);
            }
            if(message.content.toLowerCase()=="%dadjoke"){
              commands.dadjoke.execute(message,client);
              }
              if(message.content.toLowerCase()=="%cat"){
                commands.cat.execute(message,client);
                }
                if(message.content.toLowerCase()=="%dog"){
                  commands.dog.execute(message,client);
                  }
                  if(message.content.toLowerCase()=="%help"){
                    commands.help.execute(message,client);
                    }
            if(message.content.toLowerCase().startsWith("%pokemon")){
              const text = message.content.split(' ')[1]
              commands.pokemon.execute(message,client,text);
              }
              if(message.content.toLowerCase().startsWith("%github")){
                const text = message.content.split(' ')[1]
                commands.github.execute(message,client,text);
                }
  } else if (eventType === 'ChannelMessageReactionCreated'){
    console.log(json)
  }
});