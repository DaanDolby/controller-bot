const Discord = require("discord.js");
const Controller = new Discord.Client({disableEveryone: true});
const token = "placeholderfortoken";
const prefix = "!";

Controller.on("ready", async() => {
    console.log("ControllerBot has succesfully started.");
    Controller.user.setActivity("your commands", {type: "LISTENING"});
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
        return message.channel.send("Daan!");
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

    if(cmd === prefix + "lewd") {
        return message.channel.send("https://discord.gg/Uqmcmg6 ! [Flee did this, send help] ");
    }

    if(cmd === prefix + "dab") {
        return message.channel.send({
    file: "https://www.jokejive.com/images/jokejive/ca/ca275702061f25a2ae56ed695b894ec3.jpeg"});                               
    }
    
    if(cmd === prefix + "stop") {
        return message.channel.send({
    file: "https://cdn.discordapp.com/attachments/382912697022545930/478928841633562644/unknown.png"});                               
    }
    
    if(cmd === prefix + "nou") {
        return message.channel.send({
    file: "https://cdn.discordapp.com/attachments/466341067277729803/513093742417412097/image0.jpg"});                               
    }
    });

Controller.login(process.env.TOKEN);
