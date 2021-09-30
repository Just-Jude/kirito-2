const Discord = require('discord.js');
require("dotenv").config();
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
const mongoose = require("mongoose");
const memberCounter = require('./counters/member-count');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

client.once('ready', () => {
    client.user.setActivity('play.ayatoshub.xzy', { type: 'WATCHING'}).catch(console.error);
    memberCounter(client)
});
['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
});

mongoose.connect(process.env.MONGODB_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(()=>{
    console.log('connected to the database!');
}).catch((err) =>{
    console.log(err);
});

client.login(process.env.DISCORD_TOKEN)

