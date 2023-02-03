const moment = require('moment');
module.exports= {
    async execute(message,client,text){
        const res = await message.channel.getUser(message,text)
        const data = await res.json()
        const res2 = await message.channel.getServer(message.serverId)
        const data2 = await res2.json()
        console.log(data2)
        console.log(data)
        console.log(text)
        let roles='';
        data.member.roleIds.forEach(role => {
            roles = `${roles} <@${role}>`
        });
        const embed =await{
            title: `userinfo on ${data.member.user.name}`,
            thumbnail:{
                url: data.member.user.avatar,
              },
                fields:[],
              description:`${data.member.user.name} joined ${data2.server.name} at ${moment(data.member.joinedAt).format('YYYY/MM/DD')} and ${data.member.user.name} joined guilded at ${moment(data.member.user.createdAt).format('YYYY/MM/DD')}`,
           
        }
        console.log(data.member.roleIds.length)
        if(await data.member.roleIds.length){
            embed.fields.push({name:`Roles[${data.member.roleIds.length}]`,value:`${await roles}`,})
        }else{
            embed.fields.push({name:`Roles[0]`,value:`no roles🤨`,})
        }
        await message.channel.sendEmbed(embed);
    }
}