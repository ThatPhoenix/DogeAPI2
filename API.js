const Discord = require("discord.js");
const API = new Discord.Client
const logs = new Discord.WebhookClient(("488419185232314369"), ("FLMr1bolqlfGtzOFmMBxtOLR4pIpnAl2248ILexYoWfc1YFQPozaKkBX7PxLzLdALTDM"))
const PhoenixAPIVER = ("Delta 1.5")




logs.send("Webhook Status : **:ok:**")


API.on('message', message => {     
if (message.content.startsWith("DogeAPI/Tests")) {      
	message.channel.send("Pinging Components..")
  message.channel.send("API Bot Status: **:ok:**")
  messsage.channel.send("API Status: **:ok:**")
  logs.send("Webhook Status : **:ok:**")
}
});


logs.send("PROCESS DOGEAPI V2 BETA RELEASE STARTING UP")
API.login(process.env.TOKEN).catch(error => {
  logs.send(`${ErrorTypes.errorPrefix} DogeAPI2 `+ error.toString());
  logs.send(`${ErrorTypes.errorPrefix} DogeAPI2 Has Crashed **Reboot Now!**`)
});
API.on('ready', pros => {
  console.log("DogeAPI has Connected Successfully to the Discord API")
	logs.send(`${ErrorTypes.successPrefix} DogeAPIV2 Has Started Up Successfully`);
logs.send(`${ErrorTypes.warningPrefix} System Is Running on **DogeAPI_CodeName:Whistler** System Might Crash`)
});
