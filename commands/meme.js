const redditFetch = require('reddit-fetch/src/redditFetch');
const justreddit = require("justreddit");
const utils = require('../utils.js')
module.exports= {
    name: "newmeme",
    description:"test",
    async execute(message,client){
        justreddit.randomPostFromSub({
            subReddit:"memes",
            sortType:"top"
        }).then(async post => {
            console.log("this shit work");
           const userimg = await utils.reddit.getUserAvatar(post.author);
           const embed = {
            title: post.title,
            url:`https://redd.it/${post.id}`,
            image: {
                url: post.image
              },
              color: '#ff0000',
              author: {
                name: post.author,
                url: `https://www.reddit.com/user/${post.author}`,
               icon_url: userimg
              },
           }
        
           const msg = await message.channel.sendEmbed(embed)
           await message.react('90002540',msg)
           const collector = message.createCollector(client,msg);
           collector.on('collect',(rec)=>{
            if(msg.message.id === rec.reaction.messageId){
              console.log("working")
              if(rec.reaction.createdBy===message.createdBy){
            console.log(rec)
            justreddit.randomPostFromSub({
                subReddit:"memes",
                sortType:"top"
            }).then(async post => {
                console.log("this shit work");
               const userimg = await utils.reddit.getUserAvatar(post.author);
               const embed = {
                title: post.title,
                url:`https://redd.it/${post.id}`,
                color: '#ff0000',
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
          }}
           })
        })
           
    }
}