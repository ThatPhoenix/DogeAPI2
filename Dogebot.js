const Discord = require('discord.js')
const doge = new Discord.Client();
const APIData = require("./ProcessData.json")

doge.on('message', message => {     
if (message.content.startsWith("DogeBOT --Standby")) {     
if (message.author.id = ("498186211249225728")) {
message.channel.send("DogeBot is now on standby/update mode")
doge.user.setStatus("idle")
doge.user.setActivity("Please Stand By - Updating!")
}
}

});
  
  doge.on('message', message => {     
if (message.content.startsWith("DogeBOT --Standby")) {    
if (message.author.id = ("441980353242988545")) {
message.channel.send("DogeBot is now on standby/update mode")
doge.user.setStatus("idle")
doge.user.setActivity("Please Stand By - Updating!")

  }
}
  });
  

doge.on('message', message => {     
if (message.content.startsWith("DogeBOT --Difficulties")) {     
if (message.author.id = ("498186211249225728")) {
message.channel.send("DogeBot is now on Emergency/Difficulties mode")
doge.user.setStatus("dnd")
doge.user.setActivity("Please Stand By - We are currently experiencing Difficulties")
}
}

});
  
  doge.on('message', message => {     
if (message.content.startsWith("DogeBOT --Difficulties")) {    
if (message.author.id = ("441980353242988545")) {
message.channel.send("DogeBot is now on Emergency/Difficulties mode")
doge.user.setStatus("dnd")
doge.user.setActivity("Please Stand By - We are currently experiencing Difficulties")

  }
}
  });
  
 
    
  
  

  
  doge.on('ready', () => {   
    doge.user.setActivity("DogeBot Version 1!")
  });
    
    

doge.login(process.env.DogeTK)
