
const url ='https://api.chucknorris.io/jokes/random';
const fetch = require('node-fetch')
module.exports= {
    async execute(message,client){
        const res = await fetch(`${url}`);
        const data = await res.json();
        console.log(data)
        console.log(res);
        const embed ={
            title: "Chuck norris joke",
            url: "https://chucknorris.io",
            description:`${data.value}`,
            colour:'#eb211a',
            footer:{text:`using chucknorris.io`},
        }
        message.channel.sendEmbed(embed)
    }
}