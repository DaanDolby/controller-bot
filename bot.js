const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'pingling') {
    msg.reply('pong!');
  }
});

client.on('message', msg => {
  if (msg.content === 'flee') {
    msg.reply('Fokz!');
  }
});

client.on('message', msg => {
  if (msg.content === 'aftercharge') {
    msg.reply('discord.gg/Aftercharge!');
  }
});

client.on('message', msg => {
  if (msg.content === 'solo') {
    msg.reply('It is called "Solo.", because the creator of this bot will stay "solo" forever if he continues making bots like this one');
  }
});

client.login('NDYwMDI4NTUwNTE1NTIzNTg0.DkdCjQ.ES51emlV-q_qRkKtxI4HHiGGIFE');
