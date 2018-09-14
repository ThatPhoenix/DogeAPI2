const Discord = require("discord.js");
const API = new Discord.Client
const logs = new Discord.WebhookClient(("488419185232314369"), ("FLMr1bolqlfGtzOFmMBxtOLR4pIpnAl2248ILexYoWfc1YFQPozaKkBX7PxLzLdALTDM"))
const PhoenixAPIVER = ("Delta 1.5")
const APIProcessData = require("./ProcessData.json")



API.on('message', message => {     
if (message.content.startsWith("DogeAPI/Tests")) {      
	message.channel.send("Pinging Components..")
  message.channel.send("API Bot Status: **:ok:**")
  message.channel.send("API Status: **:ok:**")
  logs.send("Webhook Status : **:ok:**")
}
});

API.on('message', message => {     
if (message.content.startsWith("DogeAPI --Lockdown")) {     
if (message.author.id = (`${APIProcessData.DogeAPIOwnerAuth1}`)) {
message.channel.send("Access Granted Locking Down DogeAPI")
API.user.setStatus("dnd")
API.user.setActivity("Security Lockdown")
message.channel.send(":warning: DogeAPI Might Go Offline :warning:")
logs.send("System Status: 500 System Lockdown")

}
}
});

API.on('message', message => {     
if (message.content.startsWith("DogeAPI --Lockdown")) {     
if (message.author.id = (`${APIProcessData.DogeAPIOwnerAuth1}`)) {
message.channel.send("Access Granted Rebooting")
API.user.setStatus("dnd")
API.user.setActivity("Rebooting")
API.destroy();

}
}
});

API.on('message', message => {   
if (message.content.startsWith("DogeAPI/Admins")) {  
message.channel.send("Admin List")
message.channel.send(`Owner: <@${APIProcessData.DogeAPIOwnerAuth1}>`)
message.channel.send(`Owner2: <@${APIProcessData.DogeAPIOwnerAuth2}>`)
message.channel.send(`Some Admin :| <@${APIProcessData.OwnerAuth2Bro}>`)
}
});

logs.send("PROCESS DOGEAPI V2 BETA RELEASE STARTING UP")
API.login(process.env.TOKEN).catch(error => {
  logs.send(`${APIProcessData.error} DogeAPI2 `+ error.toString());
  logs.send(`${APIProcessData.error} DogeAPI2 Has Crashed **Reboot Now!**`)
});
API.on('ready', pros => {
  console.log("DogeAPI has Connected Successfully to the Discord API")
	logs.send(`${APIProcessData.successPrefix} DogeAPIV2 Has Started Up Successfully`);
logs.send(`${APIProcessData.warning} System Is Running on **DogeAPI_CodeName:Whistler** System Might Crash`)
});
