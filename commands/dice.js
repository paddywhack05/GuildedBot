module.exports= {
    async execute(message,client){
        const dices = [
            'https://i.imgur.com/os9fshF.png',
            'https://i.imgur.com/eZdQs5r.png',
            'https://i.imgur.com/qc7JxjD.png',
            'https://i.imgur.com/EjDoXA4.png',
            'https://i.imgur.com/EOtBHWu.png',
            'https://i.imgur.com/3tDOi3d.png',
          ];
          const dice1 = Math.floor(Math.random() * 6) + 1;
          const dice2 = Math.floor(Math.random() * 6) + 1;
          const ans = dice1 + dice2;
          const url1 = dices[dice1 - 1];
          const url2 = dices[dice2 - 1];
          //await utils.msg.sendImage(`https://i.imgur.com/os9fshF.png`,message)
          const embed = {
            image:{url:url1}
          } 
          const embed2 = {
            image:{url:url2}
          }
          await message.channel.sendEmbed(embed);
          await message.channel.sendEmbed(embed2);
          await message.channel.send(`you got ${ans}`)
    }
}

//https://media.guilded.gg/media/upload
//{"mediaInfo":{"src":"https://i.imgur.com/os9fshF.png"},"dynamicMediaTypeId":"ContentMedia","uploadTrackingId":"r-3506375-1727516"}