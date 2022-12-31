module.exports= {
    async execute(message,client){
        const embed =await{
            title: "help",
            description:"Bot prefix **%**\nWe have many command %meme,%dice,%pokemon <pokemon>,%github <user>,%dog,%cat,%dadjoke",
        }
        await message.channel.sendEmbed(embed);
    }
}