const EventEmiter = require('events')
function createCollector(client,msg){
  const collector = new EventEmiter;
    client.on('message', async (data) => {
      const json = JSON.parse(data);
      const {t: eventType, d: eventData} = json;   
        console.log(eventData)
  if (eventType === 'ChannelMessageReactionCreated'){
    //console.log(json)
    //console.log(eventData)
    if(eventData.reaction.createdBy===msg.createdBy)
    collector.emit('collect',(eventData))
  }
  else if (eventType === 'ChannelMessageReactionDeleted'){
    //console.log(json)
    //console.log(eventData)
    if(eventData.reaction.createdBy===msg.createdBy){
    collector.emit('collect',(eventData))
    }
  }
    });
  
    return collector
}
module.exports={
    createCollector,
}