const utils = require('../utils.js');
const fetch = require('node-fetch');
module.exports= {
    async execute(message,client){
        try {e()}
        catch(err){
e()
        }
        async function e(){
const url = `https://opentdb.com/api.php?amount=1`;
var res = await fetch(`${url}&encode=base64`)

const data = await res.json()
console.log(data)
//you can use this just gib credit to paddycrack weeeeeeeeeeee
const wrong1 = Buffer.from(data.results[0].incorrect_answers[0].toString(), 'base64').toString('utf8')
const wrong2 = Buffer.from(data.results[0].incorrect_answers[1].toString(), 'base64').toString('utf8')
const wrong3 = Buffer.from(data.results[0].incorrect_answers[2].toString(), 'base64').toString('utf8')
const right = Buffer.from(data.results[0].correct_answer, 'base64').toString('utf8')
const embed ={
    title: `${Buffer.from(data.results[0].question, 'base64').toString('utf8')}`,
    colour:16133127,
    footer:{text:`Using opentdb.com`},
    fields:[
    ]
}

const num = Math.floor(Math.random()*4+1)
var cor;
if(num === 1){
    embed.fields.push({name:`1`,value:wrong1,inline:true})
    embed.fields.push({name:`2`,value:wrong2,inline:true})
    embed.fields.push({name:`3`,value:wrong3,inline:true})
    embed.fields.push({name:`4`,value:right,inline:true})
    cor = 4;
}
else if(num === 2){
    embed.fields.push({name:`1`,value:wrong2,inline:true})
    embed.fields.push({name:`2`,value:right,inline:true})
    embed.fields.push({name:`3`,value:wrong1,inline:true})
    embed.fields.push({name:`4`,value:wrong3,inline:true})
    cor = 2;
}
else if(num === 3){
    embed.fields.push({name:`1`,value:wrong2,inline:true})
    embed.fields.push({name:`2`,value:wrong1,inline:true})
    embed.fields.push({name:`3`,value:right,inline:true})
    embed.fields.push({name:`4`,value:wrong3,inline:true})
    cor = 3;
}
else if(num === 4){
    embed.fields.push({name:`1`,value:right,inline:true})
    embed.fields.push({name:`2`,value:wrong1,inline:true})
    embed.fields.push({name:`3`,value:wrong2,inline:true})
    embed.fields.push({name:`4`,value:wrong3,inline:true})
    cor = 1;
}

const msg = await message.channel.sendEmbed(embed)
const rec1 =await message.react('90002199',msg)
const rec2 = await message.react('90002200',msg)
const rec3 =await message.react('90002201',msg)
const rec4 =await message.react('90002202',msg)
console.log(cor)
const collector = message.createCollector(client,msg);
console.log(msg)
collector.on('collect',async (func)=>{
    const rec = await func;
    console.log(rec,'dfgghhfdhf')
    if(msg.message.id === rec.reaction.messageId){
        if(rec.reaction.createdBy===message.createdBy){
    let ans;
    console.log(rec.reaction.emote)
    switch(rec.reaction.emote.name) {
        case 'one':
          ans = 1
          break;
        case 'two':
            ans = 2
          break;
        case 'three':
            ans = 3
          break;
          case 'four':
            ans = 4
          break;
        default:
            ans = 1
    }      

   // console.log(rec)
    const embed = {
        title: `wrong`,
        description:`${cor} was correct`,
        colour:16133127,
    }
    const correct = {
        title: `Right`,
        description:`${cor} was correct yo are cool😎`,
        colour:4120402,
    }
   //console.log(cor,ans)
    //console.log(obj.callback)
   //await collector.removeListener('collect',await func)
   collector.emit('stop')
    if(cor===ans){
        return message.channel.editEmbed(correct,msg)
    }else{
        return message.channel.editEmbed(embed,msg)
       
    }
}}
})
    }
}
}