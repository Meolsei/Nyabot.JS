const Eris = require("eris");
const Constants = Eris.Constants;

const dotenv = require("dotenv").config();
const token = process.env.TOKEN;

const bot = new Eris.CommandClient(token, {}, {
    description: "Nyabot, silly bot.",
    owner: "@meolsei",
    prefix: "sudo "
});

bot.on("ready", async () => {
    console.log("Ready!");
});

bot.on("error", (err) => {
    console.error(err);
});

bot.connect();