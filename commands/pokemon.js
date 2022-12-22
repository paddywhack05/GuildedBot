const utils = require('../utils.js');
const fetch = require('node-fetch');
module.exports= {
    async execute(message,client,text){
      if(!text) return message.utils.send("pick a pokemon",message);
const url = `https://pokeapi.co/api/v2/pokemon/${text.toLowerCase()}`;
const re = await fetch(`${url}`)
console.log(re);
if(re.status===200){
const dat = await re.json()
if(!dat){message.utils.send("that is not a pokemon see if you misspelled it",message); return;}
console.log(dat)
const res = await message.utils.getUser(message)
const data = await res.json()
let e='';
let a=0;
dat.types.forEach(types => {
    console.log(types);
    e += ' '+types.type.name.charAt(0).toUpperCase() + types.type.name.slice(1);
});
dat.moves.forEach(move=>{
    a++;
})
const embed = {
    title: dat.name.charAt(0).toUpperCase() + dat.name.slice(1),
    url:`https://pokeapi.co/`,
      author: {
        name: data.member.user.name,
      },
      thumbnail: {
        url: dat.sprites.front_default
      },
      footer: {
        text: "Using pokeapi.co",
      },
      fields:[{
        name:`🧾 Types`,
        value:e.trimStart().replace(' ',', '),
        inline:true,
      },
    {
        name:`Summary `,
        value:`${dat.name.charAt(0).toUpperCase() + dat.name.slice(1)} is a ${e.trimStart().replace(' ',' and ')} type pokemon with ${a} moves that they can learn and ${dat.base_experience} base exp`
    },
    
        {name:`${dat.stats[0].stat.name.charAt(0).toUpperCase() + dat.stats[0].stat.name.slice(1)}`,value:`${dat.stats[0].base_stat}`,inline:true},
        {name:`${dat.stats[1].stat.name.charAt(0).toUpperCase() + dat.stats[1].stat.name.slice(1)}`,value:`${dat.stats[1].base_stat}`,inline:true},
        {name:`${dat.stats[2].stat.name.charAt(0).toUpperCase() + dat.stats[2].stat.name.slice(1)}`,value:`${dat.stats[2].base_stat}`,inline:true},
        {name:`${dat.stats[3].stat.name.charAt(0).toUpperCase() + dat.stats[3].stat.name.slice(1)}`,value:`${dat.stats[3].base_stat}`,inline:true},
        {name:`${dat.stats[4].stat.name.charAt(0).toUpperCase() + dat.stats[4].stat.name.slice(1)}`,value:`${dat.stats[4].base_stat}`,inline:true},
        {name:`${dat.stats[5].stat.name.charAt(0).toUpperCase() + dat.stats[5].stat.name.slice(1)}`,value:`${dat.stats[5].base_stat}`,inline:true},
    ],
   }
   message.utils.sendEmbed(embed,message)
}else{message.utils.send("that is not a pokemon see if you misspelled it",message); return;}
}
}