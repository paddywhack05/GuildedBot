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

              description:`${data.member.user.name} joined ${data2.server.name} at ${moment(data.member.joinedAt).format('YYYY/MM/DD')} and ${data.member.user.name} joined guilded at ${moment(data.member.user.createdAt).format('YYYY/MM/DD')}`,
            fields:[{name:`Roles[${data.member.roleIds.length}]`,value:`${await roles}`,//servers/{serverId}
            }],
        }
        await message.channel.sendEmbed(embed);
    }
}