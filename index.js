const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();
const fs = require('fs');

client.commands = new Discord.Collection();

client.once('ready', () => {
	console.log('da bot is now the loaded');
});


client.login(config.token);
