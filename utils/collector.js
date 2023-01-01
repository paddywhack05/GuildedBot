const EventEmiter = require('events')
function createCollector(client,msg){
  const collector = new EventEmiter;
    client.on('message', async (data) => {
      const json = JSON.parse(data);
      const {t: eventType, d: eventData} = json;   
  if (eventType === 'ChannelMessageReactionCreated'||eventType === 'ChannelMessageReactionDeleted'){
    console.log(eventData.reaction.messageId,msg.message.id)
    if(eventData.reaction.messageId === msg.message.id){
      console.log('we are hear',eventData.reaction.createdBy,msg.message.createdBy)
    if(eventData.reaction.createdBy===this.createdBy){
      console.log('efshdfsned')
    collector.emit('collect',(eventData))
    }else{
      collector.emit('Filteractive',(eventData))
    }
    }
  }
    });
  
    return collector
}
module.exports={
    createCollector,
}