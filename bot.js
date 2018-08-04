const Discord = require("discord.js");
const Controller = new Discord.Client({disableEveryone: true});
const token = "token";
const prefix = "!";

Controller.on("ready", async() => {
    console.log("ControllerBot has succesfully started.");
    Controller.user.setActivity("BEING A BOT", {type: "PLAYING"});
});

Controller.on("message", async message => {
    if(message.author.Controller) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === prefix + "pingling") {
        return message.channel.send("Pong!");
    }

    if(cmd === prefix + "flee") {
        return message.channel.send("Fokz!");
    }

    if(cmd === prefix + "aftercharge") {
        return message.channel.send("discord.gg/Aftercharge !");
    }

    if(cmd === prefix + "solo") {
        return message.channel.send("It is called Solo., because the creator of this bot will stay solo forever if he continues making bots like this one.");
    }

    if(cmd === prefix + "straight") {
        return message.channel.send('oh no no no, you misunderstood me, my dear. I said "flee is hella queer"');
    }

    if(cmd === prefix + "Lewd!") {
        return message.channel.send("https://discord.gg/Uqmcmg6 !");
    }

});

Controller.login(token);
