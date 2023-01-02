module.exports= {
  async execute(message,client){
        const dice1 = Math.floor(Math.random() * 6) + 1;
        const dice2 = Math.floor(Math.random() * 6) + 1;
        const ans = dice1 + dice2;
       const msg =  await message.channel.send(`you got ${ans}, dice 1 was ${dice1}, dice 2 was ${dice2}`)
       await message.react('90002106',msg)
       const collector = message.createCollector(client,msg);
       collector.on('collect',async (rec)=>{
        const dice1 = Math.floor(Math.random() * 6) + 1;
        const dice2 = Math.floor(Math.random() * 6) + 1;
        const ans = dice1 + dice2;
           await message.edit(`you got ${ans}, dice 1 was ${dice1}, dice 2 was ${dice2}`,msg)
       
       })
  }
}