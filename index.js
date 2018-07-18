// les variables qui concernent le bot entier
global.ownerID = "258394351628058636";
global.prefix = "hmc.";
global.util = require('util');
// création du client
global.Discord = require('discord.js');
global.bot = new Discord.Client();
const config = require('./config.json');
const fs = require("fs");

// event ready, qui prépare le bot
bot.on('ready', () => {

  console.log("Bot lancé."); //Affiche un message dans les commandes au démarrage du bot
  console.log(`Ready to serve on ${bot.guilds.size} servers, for ${bot.users.size} users.`);
  bot.user.setStatus('available'); //Statut du bot: 'available', 'idle', 'dnd', 'invisible'
  bot.user.setActivity(`hmc.info || Canary Test Version | Ready to serve on ${bot.guilds.size} servers, for ${bot.users.size} users.`, {type: 'WATCHING', URL: 'https://www.youtube.com/channel/UCYGjxo5ifuhnmvhPvCc3DJQ'}); //Jeu en cours du bot: 0 = Playing | 1 = Streaming | 2 = Listening | 3 = Watching
  bot.user.setAvatar('./canary.png')

})
 
//PARTIE COMMANDES ET MESSAGES
bot.on('message', message => {

    // Exit and stop if it's not there
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    if (message.content === config.prefix+'pingu'){
      message.react('🐧')
      message.channel.send("Noot noot! 🐧") 
      message.channel.send(new Date().getTime() - message.createdTimestamp + " ms")
    } else

    if (message.content === config.prefix+'help') {
      message.channel.send("Y'a pas de commandes, faut savoir attendre wsh").catch(console.log);
    } else

    if (message.content === config.prefix+'info') {
      message.channel.send("```css\nName: B0tsune_M1ku Canary\nVersion: 1.0.0\nDescription: H4tsune_M1ku's bot\nAuthor: H4tsune_M1ku#0001\n```").catch(console.log);
    } else

    if (message.content === config.prefix+'playlist') {
      message.channel.send("https://www.youtube.com/playlist?list=PL91359E274EA87F2A").catch(console.log);
    } else
  
//Changer le prefix
if(message.content.startsWith(config.prefix + "prefix")) {
  // Gets the prefix from the command (eg. "!prefix +" it will take the "+" from it)
  let newPrefix = message.content.split(" ").slice(1, 2)[0];
  // change the configuration in memory
  config.prefix = newPrefix;

  // Now we have to save the file.
  fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
}

// Status

if (message.content === config.prefix+'set available') {
  
  if(message.author.id !== ownerID) return;
  
  bot.user.setStatus('available');
  message.channel.send("Status set to available")
    .then(user => console.log("Status set to available"))
    .catch(console.error);
} else

if (message.content === config.prefix+'set idle') {
  
  if(message.author.id !== ownerID) return;
  
  bot.user.setStatus('idle');
  message.channel.send("Status set to idle")
    .then(user => console.log("Status set to idle"))
    .catch(console.error);
} else

if (message.content === config.prefix+'set dnd') {
  
  if(message.author.id !== ownerID) return;
  
  bot.user.setStatus('dnd');
  message.channel.send("Status set to do not disturb")
    .then(user => console.log("Status set to do not disturb"))
    .catch(console.error);
} else

if (message.content === config.prefix+'set invisible') {
  
  if(message.author.id !== ownerID) return;
  
  bot.user.setStatus('invisible');
  message.channel.send("Status set to invisible")
    .then(user => console.log("Status set to invisible"))
    .catch(console.error);
} else

if (message.content === config.prefix+'set dev') {
  
  if(message.author.id !== ownerID) return;
  
  client.user.setActivity('hmc.info | IN DEV STATE', { type: 'WATCHING' }) //Jeu en cours du bot: 0 = Playing | 1 = Streaming | 2 = Listening | 3 = Watching
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error);
} else

// Photos de profil

if (message.content === config.prefix+'set canary.png') {
  
  if(message.author.id !== ownerID) return;
  
  bot.user.setAvatar('./canary.png')
    .then(user => console.log(`New avatar set!`))
    .catch(console.error)
  message.channel.send("New avatar set!").catch(console.log);  
} else

if (message.content === config.prefix+'set miku canary.png') {
  
  if(message.author.id !== ownerID) return;
  
  bot.user.setAvatar('./miku canary.png')
    .then(user => console.log(`New avatar set!`))
    .catch(console.error)
  message.channel.send("New avatar set!").catch(console.log);
} else

//EVAL

    if (message.content.startsWith(config.prefix+"eval")) {

      if(message.author.id !== ownerID) return;

      let code = message.content.split(" ").slice(1).join(' '); // on prend le contenu du message et on retire le premier mot pour ne garder que le code à évaluer
      if (!code) return;
      let evaled;
      try {
        evaled = eval(code);
      }
      catch(err) {
        message.channel.send(`\`ERREUR\` \`\`\`${err}\`\`\``).catch(console.log);
        return;
      }
      if (typeof(evaled) !== "string") evaled = util.inspect(evaled);
      message.channel.send(`\`\`\`js\n${evaled}\`\`\``).catch(console.log);
    }


});


bot.login(config.token) //Token du bot
