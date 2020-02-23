const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix = "-"

Client.on('ready', ()=>{
    console.log("The bot has been logged in!")
})

Client.on('message', (message)=>{
    if(-message.content.startsWith.apply(prefix)) return;
    if(message.author.bot) return;


    if(message.content.startsWith(prefix + "ip"))
        message.reply("Currently, there is no ip! We are working on the server!");


    if(message.content.startsWith(prefix + "help"))
        message.author.send("The commands are (CHANGE THIS)");


    if(message.content.startsWith(prefix + "apply"))
        message.author.send("Hello! Applications are currently closed! Sorry!")
})

Client.login(process.env.token);
