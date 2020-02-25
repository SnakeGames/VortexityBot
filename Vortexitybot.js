const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix = "-"

Client.on('ready', ()=>{
    console.log("The bot has been logged in!")
})

Client.on('message', (message)=>{
    if(-message.content.startsWith.apply(prefix)) return;
    if(message.author.bot) return;

       let args = meessage.content.substring(prefix.legnth).split(" ")

       switch(args[0]){
           case 'help':
                const embed = new Discord.RichEmbed()
                .addField('Player Information', msg.author.username)
                message.channel.sendEmbed(embed);
          break;
       }


    if(message.content.startsWith(prefix + "ip"))
        message.reply("Currently, there is no ip! We are working on the server!");

    if(message.content.startsWith(prefix + "apply"))
        message.author.send("Hello! Applications are currently closed! Sorry!")
})

Client.login(process.env.token);
