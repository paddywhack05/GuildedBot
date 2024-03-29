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
    const res = await fetch(`https://www.guilded.gg/api/v1/channels/${msg.message.channelId}/messages/${msg.message.id}/emotes/${emoteId}`, {
    //:white_check_mark:
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
  })
 console.log(res);
}else{
  const res = await fetch(`https://www.guilded.gg/api/v1/channels/${this.channel.id}/messages/${this.id}/emotes/${emoteId}`, {
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

async function unreact(emoteId,msg){
  if(msg){
    console.log('sdsdsd',msg)
    const res = await fetch(`https://www.guilded.gg/api/v1/channels/${msg.message.channelId}/messages/${msg.message.id}/emotes/${emoteId}`, {
    //:white_check_mark:
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
  })
 console.log(res);
}else{
  const res = await fetch(`https://www.guilded.gg/api/v1/channels/${this.channel.id}/messages/${this.id}/emotes/${emoteId}`, {
    //:white_check_mark:
    method: 'DELETE',
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
  async function hexToDec(hexStr){
    if(!isNaN(hexStr)){return(await parseInt(hexStr))}
 var hexNumber = await hexStr.substring(1)||obj.colour.substring(1);
 var intNumber = await parseInt(hexNumber, 16);
 return(intNumber);
  }
  const colour = await hexToDec(obj.color??obj.colour)
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
        color:await colour,
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
  if(typeof str === 'object' && yourVariable !== null){
    const res = await fetch(`https://www.guilded.gg/api/v1/channels/${this.id}/messages`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        mentions:str.mentions,
        content: str.content,
      }),
    })
    const data = await res.json();
    return data;
  }else{
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
  async function hexToDec(hexStr){
    if(hexStr){
    if(!isNaN(hexStr)){return(await parseInt(hexStr))}
 var hexNumber = await hexStr.substring(1)||obj.colour.substring(1);
 var intNumber = await parseInt(hexNumber, 16);
 return(intNumber);
    }return 0
  }
  const colour = await hexToDec(obj.color??obj.colour)
  console.log(obj)
  const res = await fetch(`https://www.guilded.gg/api/v1/channels/${this.id}/messages`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          mentions:obj.mentions,
          embeds: [{
            title: obj.title,
            description: obj.description,
            url:obj.url,
            color:await colour,
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

async function getServer(serverId){
    const res = await fetch(`https://www.guilded.gg/api/v1/servers/${serverId}`, {//${userid}
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
  }); 
  return res;
}

async function getUser(message,userid){
  if(userid){  
    const res = await fetch(`https://www.guilded.gg/api/v1/servers/${message.serverId}/members/${userid}`, {//${userid}
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
  }); 
  return res;
}
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
getServer,
getUser,
send,
sendEmbed,
sendImage,
reply,
react,
edit,
editEmbed,
unreact,
}