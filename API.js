const Discord = require("discord.js");
const API = new Discord.Client
const logs = new Discord.WebhookClient(("503636043535482910"), ("y_qDdoCFOdzTMWgiIKv01h4UgJfCju4iDtOhJyUJE9BuBQLeiABsRmUPsahX6ndx2Rea"))
const DogeAPIVER = ("DogeAPI 2.0")
const APIData = require("./ProcessData.json")
const DogeStart = require("./Dogebot.js")

API.on('ready', () => {   
    API.user.setActivity(`${DogeAPIVER}`)   
       
});

API.on('message', message => {     
if (message.content.startsWith("DogeAPI/Tests")) {      
	message.channel.send("Pinging Components..")
	message.channel.send("DogeAPI 3.0 Stats:")
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
	if (message.author.id === "498186211249225728") {
		let msg = message.content;

		if (msg.startsWith(">eval")) {
   		msg = msg.substring(">eval ".length)
   		msg = msg.replace(/```js/gi, "")
   		msg = msg.replace(/```/gi, "")

   		try {
   			let result = eval(msg)

    		if (typeof(result) == "undefined") {
    			message.channel.send({
    				embed: {
    					description: "This code didn't return any value",
    					fields: [
    						{
    							name: ":inbox_tray: Input",
    							value: "```" + msg + "```"
    						},
    						{
    							name: ":outbox_tray: Output",
    							value: "Nothing here :innocent:"
    						}
  	  				],
  	  				footer: {
  	  					text: "PhoenixEval"
  	  				}
  	  			}
  	  		})
  	  	} else {
  	  		message.channel.send({
  	  			embed: {
    					fields: [
    						{
    							name: ":inbox_tray: Input",
    							value: "```" + msg + "```"
    						},
    						{
	    						name: ":outbox_tray: Output",
  	  						value: "```" + result + "```"
    						}
    					],
    					footer: {
    						text: "PhoenixEval"
    					}
	    			}
  	  		})
    		}
   		} catch (e) {
   			message.channel.send({
  	  			embed: {
  	  				description: ":dizzy_face: Something went wrong",
    					fields: [
    						{
    							name: ":inbox_tray: Input",
    							value: "```" + msg + "```"
    						},
    						{
    							name: "Error content",
    							value: "```" + e + "```"
    						}
    					],
    					footer: {
    						text: "PhoenixEval"
    					}
	    			}
  	  		})
   		}
  	}
	}
})


API.on('message', message => {   
if (message.content.startsWith("DogeAPI/Admins")) {  
message.channel.send("Admin List")
message.channel.send(`Owner: <@${APIData.DogeAPIOwnerAuth1}>`)
message.channel.send(`Owner2: <@${APIData.DogeAPIOwnerAuth2}>`)
message.channel.send(`Some Admin :| <@${APIData.OwnerAuth2Bro}>`)
}
});

logs.send("Please Wait.. Starting Up DogeAPI 3.0")
API.login(process.env.TOKEN).catch(error => {
  logs.send(`${APIData.error} DogeAPI2 `+ error.toString());
  logs.send(`${APIData.error} DogeAPI2 Has Crashed **Reboot Now!**`)
});
API.on('ready', () => {
logs.send(`${APIData.successPrefix} DogeAPI 2.0 Has Started Up Successfully`);
logs.send(`${APIData.warning} System Is Running on **DogeAPI 2.0 Codename: Longhorn**`)
});
