module.exports= {
    async execute(message,client,text){
        const res = await message.channel.getUser(message,text)
        const data = await res.json()
        console.log(text)
        console.log(data)
        const embed =await{
            title: "userinfo",
            description:"abcdefg",
            author:{name:data.member.user.name},
        }
        await message.channel.sendEmbed(embed);
    }
}