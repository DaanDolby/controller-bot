var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !pingling
            case 'pingling':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
			    });
            break;
			// !flee
			case 'flee':
                bot.sendMessage({
                    to: channelID,
                    message: 'Fokz!'
                });
            break;
			// !Aftercharge
			case 'aftercharge':
                bot.sendMessage({
                    to: channelID,
                    message: 'discord.gg/Aftercharge!'
                });					
            break;
            // Just add any case commands if you want to..
            // !Solo.
			case 'solo':
                bot.sendMessage({
                    to: channelID,
                    message: 'It is called "Solo.", because the creator of this bot will stay "solo" forever if he continues making bots like this one'
                });					
            break;
            // !straight.
			case 'straight':
                bot.sendMessage({
                    to: channelID,
                    message: 'oh no no no, you misunderstood me, my dear. I said "flee is hella queer".'
                });					
            break;    
         }
     }
});
//needed for Github
client.login(ProcessingInstruction.env.BOT_TOKEN);
bot.login("NDYwMDI4NTUwNTE1NTIzNTg0.DkdCjQ.ES51emlV-q_qRkKtxI4HHiGGIFE");
