const Discord = require('discord.js')
const doge = new Discord.Client();


doge.on('message', message => {     
if (message.content.startsWith("DogeBOT --Standby")) {     
if (message.author.id = (`${APIData.DogeAPIOwnerAuth1}`)) {
message.channel.send("DogeBot is now on standby/update mode")
doge.user.setStatus("idle")
doge.user.setActivity("Please Stand By - Updating!")


}
  
  if (message.author.id = (`${APIData.DogeAPIOwnerAuth2}`)) {
message.channel.send("DogeBot is now on standby/update mode")
doge.user.setStatus("idle")
doge.user.setActivity("Please Stand By - Updating!")

  }
});

  
  doge.on('message', message => {   

doge.login(process.env.DogeTK)
