const redditFetch = require('reddit-fetch/src/redditFetch');
const utils = require('../utils.js')
module.exports= {
    name: "meme",
    description:"test",
    async execute(message,client){
        redditFetch({
            subreddit:'memes',
            sort: 'top',
            allowNSFW: false,
           allowCrossPost: true,
            allowVideo: true,
            allowModPost: false,
           }).then(async post => {
           const userimg = await utils.reddit.getUserAvatar(post.author);
           const embed = {
            title: post.title,
            url:`https://redd.it/${post.id}`,
            image: {
                url: post.url
              },
              author: {
                name: post.author,
                url: `https://www.reddit.com/user/${post.author}`,
               icon_url: userimg
              },
           }
        
           const msg = await message.channel.sendEmbed(embed)
           await message.react('90002540',msg)
           const collector = message.createCollector(client,message);
           collector.on('collect',(rec)=>{
            console.log(rec)
            redditFetch({
                subreddit:'memes',
                sort: 'top',
                allowNSFW: false,
               allowCrossPost: true,
                allowVideo: true,
                allowModPost: false,
               }).then(async post => {
               const userimg = await utils.reddit.getUserAvatar(post.author);
               const embed = {
                title: post.title,
                url:`https://redd.it/${post.id}`,
                image: {
                    url: post.url
                  },
                  author: {
                    name: post.author,
                    url: `https://www.reddit.com/user/${post.author}`,
                   icon_url: userimg
                  },
               }
               message.editEmbed(embed,msg)
            })
           })
        })
           
    }
}