const fetch = require('node-fetch');
module.exports= {
    async execute(message,client){
        var headers = {
            Accept: 'application/json'
          }
        const url = `https://icanhazdadjoke.com/`;
        const res = await fetch(`${url}`,{method: 'GET', headers: headers});
        const dat = await res.json();
        console.log(dat);
        const img = `https://icanhazdadjoke.com/j/${dat.id}.png`;
        const joke = dat.joke;
        console.log(joke);
        console.log(img);
        const embed = {
            title: 'Dad joke',
            url:`https://icanhazdadjoke.com/j/${dat.id}.png`,
            description:`${joke}`
           }
           message.channel.sendEmbed(embed);
    }
}