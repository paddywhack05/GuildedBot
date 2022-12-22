const url = `https://dog.ceo/api/breeds/image/random`;
const fetch = require('node-fetch')
module.exports= {
    async execute(message,client){
        const res = await fetch(`${url}`);
        const data = await res.json();
        const embed ={
            title: "Dogo",
            url:'https://dog.ceo',
            image:{url:`${data.message}`},
            colour:16133127,
            footer:{text:`using https://dog.ceo`},
        }
        message.utils.sendEmbed(embed,message)
    }
}