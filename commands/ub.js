const fetch = require('node-fetch');
module.exports= {
    async execute(message,client,text){
        if(!text){
            message.channel.send("You have to enter a term like \n %urban <term>"); return;
        }
        const url = `https://api.urbandictionary.com/v0/define?term=${text}`;
                const response = await fetch(`${url}`)
const {list} = await response.json()
const [dat] = list;
       if(!dat){message.channel.send("that is not a word acording to Urban dictionary"); return;}

        const embed = {
            title: `Definition of ${dat.word}`,
            url:dat.permalink,
            fields:[
                   {name:`Definition`,value:dat.definition},
                   {name:`Example`,value:dat.example}
        ],
        footer:{text:`👍${dat.thumbs_up}  👎${dat.thumbs_down}`},
           }
           message.channel.sendEmbed(embed);
    }
}