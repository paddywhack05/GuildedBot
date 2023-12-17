const EventEmiter = require('events')
const collector = new EventEmiter;
function createCollector(client,msg){
  //collector.stop = stop
  const callback=function(){
    console.log('Someone did something')
  }
    client.on('message', async (data) => {
      const json = JSON.parse(data);
      const {t: eventType, d: eventData} = json;   
  if (eventType === 'ChannelMessageReactionCreated'||eventType === 'ChannelMessageReactionDeleted'){
   // console.log(eventData.reaction.messageId,msg.message.id)
    if(eventData.reaction.messageId === msg.message.id){
     // console.log('we are hear',eventData.reaction.createdBy,msg.message.createdBy)
    if(eventData.reaction.createdBy===this.createdBy){
      async function stop(){
        collector.removeListener('collect',eventfired,)
      }
      async function eventfired(data){
        console.log(data)
        return data;
      }
      //console.log('efshdfsned')
      collector.on('stop',stop)
    collector.emit('collect',eventfired(eventData),{once:true})
    }else{
      collector.emit('filterActive',(eventData))
    }
    }
  }
    });
  //collector.stop = stop();

  console.log(collector)
    return collector
}
module.exports={
    createCollector,
}