const fetch = require('node-fetch');
const token = require('../utils/config.js')
function sendImage(link,message){
  console.log('heresdszxassssssssssssssss')
  fetch(`https://media.guilded.gg/media/upload`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "mediaInfo":{"src":"https://i.imgur.com/os9fshF.png"},"dynamicMediaTypeId":"ContentMedia","uploadTrackingId":"r-3506375-1727516"
    },
  }); 
}
function send(str,message){
  fetch(`https://www.guilded.gg/api/v1/channels/${message.channelId}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content: str,
    }),
  }); 
}
function sendEmbed(obj,message){
  console.log(obj,message)
    fetch(`https://www.guilded.gg/api/v1/channels/${message.channelId}/messages`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          embeds: [{
            title: obj.title,
            description: obj.description,
            url:obj.url,
            color:obj.color||obj.colour,
            image:obj.image,
              author: obj.author,
              thumbnail: obj.thumbnail,
              footer:obj.footer,
              fields: obj.fields,
              
          }]
        }),
      }); 
}
async function getUser(message){
  const res = await fetch(`https://www.guilded.gg/api/v1/servers/${message.serverId}/members/${message.createdBy}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    }); 
    return res;
}
module.exports= {
getUser,
send,
sendEmbed,
sendImage,
}