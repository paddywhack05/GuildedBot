const url ='https://cataas.com/cat?json=true';
const start='https://cataas.com/cat/';
const fetch = require('node-fetch')
module.exports= {
    async execute(message,client){
        const res = await fetch(`${url}`);
        const data = await res.json();
        console.log(data)
        console.log(res);
        const embed ={
            title: "Cat",
            url:start,//it's the same
            image: {url:`${start+data._id}`},
            colour:16133127,
            footer:{text:`using cataas.com`},
        }
        message.channel.sendEmbed(embed)
    }
}