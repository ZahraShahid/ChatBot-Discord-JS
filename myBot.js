const Discord = require("discord.js");
const {GatewayIntentBits} = require("discord.js")
const {TOKEN} = require("./config")

const client = new Discord.Client({intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages]})

client.on("ready",()=>{
    console.log("Connected as "+ client.user.tag)
})

client.login(TOKEN)