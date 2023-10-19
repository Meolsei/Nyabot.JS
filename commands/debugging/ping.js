const { Client, SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with the bot latency.'),
    async execute(interaction) {
        await interaction.reply(`working on this shitty command; i don't know javascript lmao`);
    },
};