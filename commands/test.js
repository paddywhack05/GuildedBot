module.exports= {
    async execute(message,client){
        const res = await message.channel.getUser(message)
        const data = await res.json()
        console.log(data)
        const embed =await{
            title: "test",
            description:"test",
            author:{name:data.member.user.name},
            image:{
                url:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png'
            },
        }
       const msg = await message.channel.sendEmbed(embed);
        const rec1 =await message.react(90002199,msg)
    }
}