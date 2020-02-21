const Discord = require("discord.js")
const bot = new Discord.Client();
const prefix = "-"

const token ='NjgwMzA2NTk2ODUyNzkzMzU1.Xk9_Dw.0_jVLJN6G2Si1Cd9UIie3MSeBmo';




bot.on('ready', ()=>{
    console.log("The bot has been logged in!")
})

bot.on('message', (message)=>{
    if(-message.content.startsWith.apply(prefix)) return;
    if(message.author.bot) return;


    if(message.content.startsWith(prefix + "ip"))
        message.reply("Currently, there is no ip! We are working on the server!");


    if(message.content.startsWith(prefix + "help"))
        message.author.send("The commands are (CHANGE THIS)");


    if(message.content.startsWith(prefix + "apply"))
        message.author.send("Hello! Applications are currently closed! Sorry!")
})

bot.login(process.env.token);
