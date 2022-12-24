const fetch = require('node-fetch');
module.exports= {
    async execute(message,client,text){
        if(!text){
            message.utils.send("You have to enter a term like \n %urban <term>",message); return;
        }
        const url = `https://api.urbandictionary.com/v0/define?term=${text}`;
                const response = await fetch(`${url}`)
const {list} = await response.json()
const [dat] = list;
       if(!dat){message.utils.send("that is not a word acording to Urban dictionary",message); return;}

        const embed = {
            title: `Definition of ${dat.word}`,
            url:dat.permalink,
            fields:[
                   {name:`Definition`,value:dat.definition},
                   {name:`Example`,value:dat.example}
        ]
           }
           message.utils.sendEmbed(embed,message);
    }
}