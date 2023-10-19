const { ActionRowBuilder } = require('@discordjs/builders');
const { ButtonBuilder, ButtonStyle, EmbedBuilder, SlashCommandBuilder } = require('discord.js');

const username = "Meolsei";
const apiKey = "zaApgzRdM2aDnTdqZDiTtfvH";

module.exports = {
    data: new SlashCommandBuilder()
        .setName('e621')
        .setDescription('You horny furries.')
        .addStringOption(option =>
            option
                .setName('search')
                .setDescription('What are you searching for?')
                .setRequired(false)),
        
        
    async execute(interaction) {
        const search = interaction.options.getString('search');

        const response = await fetch(`https://e621.net/posts.json?limit=1&tags=${search}`, {
            headers: { "Authorization" : "Basic " + btoa(`${username}:${apiKey}`)}
        });

        const data = await response.json();

        const embed = new EmbedBuilder()
            .setTitle(`ID: ${data["posts"][0]["id"]} - Score: ${data["posts"][0]["score"]["total"]}`)
            .setURL(data["posts"][0]["url"])
            .setImage(data["posts"][0]["file"]["url"]);
        
        const previous = new ButtonBuilder()
            .setCustomId('previous')
            .setLabel('Previous Post')
            .setStyle(ButtonStyle.Secondary)
        
        const next = new ButtonBuilder()
            .setCustomId('next')
            .setLabel('Next Post')
            .setStyle(ButtonStyle.Primary)

        const nav = new ActionRowBuilder()
            .addComponents(previous, next);

        const post = await interaction.reply({embeds: [embed]});

//        const collectorFilter = i => i.user.id === interaction.user.id;
//        try {
//            const navigation = await post.awaitMessageComponent({ filter: collectorFilter, time:60000 });
//
//            if (navigation.customId === 'next') {
//                await navigation.update({content: "pretend i went next"});
//            } else if (navigation.customId === 'previous') {
//                await navigation.update({content: "pretend i went the other way"});
//            }
//        } catch (e) {
//            console.error(e)
//            await interaction.editReply({content:"there was an error and i have no idea what the fuck it was"});
//        }
    },
};