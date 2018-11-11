const Discord = require("discord.js");
const API = new Discord.Client
const logs = new Discord.WebhookClient(("503636043535482910"), ("y_qDdoCFOdzTMWgiIKv01h4UgJfCju4iDtOhJyUJE9BuBQLeiABsRmUPsahX6ndx2Rea"))
const DogeAPIVER = ("Delta 3.0")
const APIData = require("./ProcessData.json")



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
if (message.author.id = (`${APIData.DogeAPIOwnerAuth1}`)) {
message.channel.send("Access Granted Locking Down DogeAPI")
API.user.setStatus("dnd")
API.user.setActivity("Security Lockdown")
logs.send("System Status: 500 System Lockdown")

}
}
});

API.on('message', message => {     
if (message.content.startsWith("DogeAPI --Reboot")) {     
if (message.author.id = (`${APIData.DogeAPIOwnerAuth1}`)) {
message.channel.send("Access Granted Rebooting")
API.user.setStatus("dnd")
API.user.setActivity("Rebooting")
API.destroy();

}
}
});


API.on('message', message => {     
if (message.content.startsWith("DogeAPI --Reset")) {     
if (message.author.id = (`${APIData.DogeAPIOwnerAuth1}`)) {
message.channel.send("Resetting")
API.user.setStatus("online")
API.user.setActivity("Doge API")

}
}
});

API.on('message', message => {   
if (message.content.startsWith("DogeAPI/Admins")) {  
message.channel.send("Admin List")
message.channel.send(`Owner: <@${APIData.DogeAPIOwnerAuth1}>`)
message.channel.send(`Owner2: <@${APIData.DogeAPIOwnerAuth2}>`)
message.channel.send(`Some Admin :| <@${APIData.OwnerAuth2Bro}>`)
}
});

logs.send("PROCESS DOGEAPI V2 BETA RELEASE STARTING UP")
API.login(process.env.TOKEN).catch(error => {
  logs.send(`${APIData.error} DogeAPI2 `+ error.toString());
  logs.send(`${APIData.error} DogeAPI2 Has Crashed **Reboot Now!**`)
});
API.on('ready', () => {
logs.send(`${APIData.successPrefix} DogeAPI 2.0 Has Started Up Successfully`);
logs.send(`${APIData.warning} System Is Running on **DogeAPI 2.0 Codename: Longhorn**`)
});
