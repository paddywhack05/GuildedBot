module.exports= {
    async execute(message,client,text){
        const res = await message.channel.getUser(message,text)
        const data = await res.json()
        console.log(text)
        console.log(data)
        const embed =await{
            title: "test",
            description:"test",
            author:{name:data.member.user.name},
            image:{
                url:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png'
            },
        }
        await message.channel.sendEmbed(embed);
    }
}