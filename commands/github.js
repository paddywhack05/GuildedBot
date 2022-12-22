const utils = require('../utils.js')
const fetch = require('node-fetch')
module.exports= {
    async execute(message,client,text){
        if(!text){
            message.utils.send("You have to type a name like \n %github <user>",message); return;
            }
            const url = `https://api.github.com/users/${text}`;
                    const res = await fetch(`${url}`)
                    console.log(res);
                    if(res.status===200){
                    const data = await res.json();
                    console.log(data)
                    if(data.message){message.utils.send("that is not a github user see if you misspelled the name",message); return;};
                    const embed ={
                        title: `${data.login.charAt(0).toUpperCase() + data.login.slice(1)}`,
                        url:`${data.html_url}`,
                        colour:16133127,
                        footer:{text:`Using github rest api`},
                        thumbnail:{url:data.avatar_url},
                        fields:[
                            {name:`Followers[${data.followers}]`,value:`${data.login} has ${data.followers} followers`,inline:true},
                            {name:`Public repos[${data.public_repos}]`,value:`${data.login} has ${data.public_repos} public repos`,inline:true},
                            {name:`User Created`,value:`${data.login} was created ${data.created_at}`,inline:true},
                        ]
                    }
                    if(data.bio){
                        embed.fields.push({name:`📖Bio`,value:`${data.bio}`,inline:true})
                    }
                    if(data.email){
                        if(data.hireable){
                        embed.fields.push({name:`📨Email`,value:`mail them if you need what they do they are hireable[${data.email}](mailto:${data.email})`,inline:true})
                        }else{
                            embed.fields.push({name:`📨Email`,value:`${data.email}`,inline:true})
                        }
                    }
                    if(data.company){
                        embed.fields.push({name:`💼Company`,value:`${data.company}`,inline:true})
                    }
    
                    if(data.hireable){
                        embed.fields.push({name:`Hireable`,value:`Hire them`,inline:true})
                    }
                    if(data.name){
                        embed.fields.push({name:`Name`,value:`${data.name.charAt(0).toUpperCase() + data.name.slice(1)}`,inline:true})
                    }
                    if(data.twitter_username){
                        embed.fields.push({name:`📱twitter`,value:`${data.twitter_username}`,inline:true})
                    }
                    if(data.location){
                        embed.fields.push({name:`🗺Location`,value:`${data.location}`,inline:true})
                    }
                    if(data.blog){
                        //embed.addField(`🌐Blog`,`**[${data.blog}](${data.blog})**`,true)
                        embed.fields.push({name:`🌐Blog`,value:`**[${data.blog}](${data.blog})**`,inline:true})
                    }
                    message.utils.sendEmbed(embed,message)


                    }else{message.utils.send("that is not a github user see if you misspelled the name",message); return;}
    }
}