async function start(){
require("dotenv").config()
const token = process.env.TOKEN;
const commands = require(`./command.js`);
const utils = require(`./utils.js`);
const client = utils.log.login(token)
const server = require('http').createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();});
const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`Listening on ${port}`));

client.on('open', async function() {
  //console.log('connected to Guilded!',client);
});
process.on('uncaughtException', err => {
  //I know its bad practice aaaaaaaaaaaaaaaaaaaaaaaaa
  console.error(err, 'Uncaught Exception thrown');
});
client.on('message', async (data) => {
  const json = JSON.parse(data);
  const {t: eventType, d: eventData} = json;
  if (eventType === 'ChatMessageCreated') { //message create
    const message = eventData.message;
    message.reply = utils.msg.reply
    message.react = utils.msg.react
    message.unreact = utils.msg.unreact
    message.edit = utils.msg.edit
    message.editEmbed = utils.msg.editEmbed
    message.createCollector = utils.collector.createCollector
    message.channel=utils.msg;
    message.channel.id=message.channelId
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
                    if(message.content.toLowerCase()=="%trivia"){
                      commands.trivia.execute(message,client);
                      }
                      if(message.content.toLowerCase()=="%covid"){
                        commands.covid.execute(message,client);
                        }
                        if(message.content.toLowerCase()=="%chuck"||message.content.toLowerCase()=="%chucknorris"){
                          commands.chucknorris.execute(message,client);
                          }//tgtgg
            if(message.content.toLowerCase().startsWith("%pokemon")){
              const text = message.content.split(' ')[1]
              commands.pokemon.execute(message,client,text);
              }
              if(message.content.toLowerCase().startsWith("%urban")){
                const text = message.content.split(' ')[1]
                commands.urban.execute(message,client,text);
                }
                if(message.content.toLowerCase().startsWith("%userinfo")){
                  console.log(message.mentions)
                  if(message.mentions){
                    console.log(message.mentions,'sdsdsdsddsdssdsd')
                    const text = message.mentions.users[0].id;
                    commands.userinfo.execute(message,client,text);
                  }else{
                    const text = message.createdBy;
                    commands.userinfo.execute(message,client,text);
                  }
                  }
              if(message.content.toLowerCase().startsWith("%github")){
                const text = message.content.split(' ')[1]
                commands.github.execute(message,client,text);
                }
  } else if (eventType === 'ChannelMessageReactionCreated'){
    console.log(json)
  }
});
//dev comit test
client.on('close', async function(code,err) {
  console.log('disconnected from Guilded',code,err);
  start()
});
}
start()