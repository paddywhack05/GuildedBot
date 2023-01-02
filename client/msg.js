const fetch = require('node-fetch');
const token = require('../utils/config.js')
async function sendImage(link,message){
  console.log('heresdszxassssssssssssssss')
  const res = await fetch(`https://media.guilded.gg/media/upload`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body:JSON.stringify({"mediaInfo":{"src":"https://i.imgur.com/os9fshF.png"},"dynamicMediaTypeId":"ContentMedia","uploadTrackingId":"r-3506375-1727516"}),
  })
  const data = await res.json();
  return data;
}
async function react(emoteId,msg){
  if(msg){
    console.log('sdsdsd',msg)
    const res = await fetch(`https://www.guilded.gg/api/v1/channels/${msg.message.channelId}/content/${msg.message.id}/emotes/${emoteId}`, {
    //:white_check_mark:
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
  })
 //console.log(res);
}else{
  const res = await fetch(`https://www.guilded.gg/api/v1/channels/${this.channel.id}/content/${this.id}/emotes/${emoteId}`, {
    //:white_check_mark:
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
  })
 //console.log(res);
}
}
//channels/{channelId}/messages/{messageId}
async function edit(str,msg){
  console.log(this.id,this)
  const res = await fetch(`https://www.guilded.gg/api/v1/channels/${msg.message.channelId}/messages/${msg.message.id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content: str,
    }),
  })
  const data = await res.json();
  return data;
}
async function editEmbed(obj,msg){
  console.log(msg)
  const res = await fetch(`https://www.guilded.gg/api/v1/channels/${msg.message.channelId}/messages/${msg.message.id}`, {
    method: 'PUT',
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
    })
  })
  const data = await res.json();
  return data;
}
async function send(str,message){
  console.log(this.id,this)
  const res = await fetch(`https://www.guilded.gg/api/v1/channels/${this.id}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content: str,
    }),
  })
  const data = await res.json();
  return data;
}
async function reply(content){
  console.log(content,this.id)
  if(typeof content ==='object'){
  const res = await fetch(`https://www.guilded.gg/api/v1/channels/${this.channel.id}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      isPrivate:content.private||false,
      content: content.content,
      replyMessageIds:[`${this.id}`],
    }),
  })
  const data = await res.json();
  return data;
}else{
  const res = await fetch(`https://www.guilded.gg/api/v1/channels/${this.channel.id}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content: content,
      replyMessageIds:[`${this.id}`],
    }),
  })
  const data = await res.json();
  return data;
}
}
async function sendEmbed(obj){
  console.log(obj)
  const res = await fetch(`https://www.guilded.gg/api/v1/channels/${this.id}/messages`, {
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
      const data = await res.json();
      return data;
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
reply,
react,
edit,
editEmbed,
}