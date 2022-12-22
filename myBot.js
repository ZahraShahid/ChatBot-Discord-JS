const {Client, GatewayIntentBits} = require("discord.js")
const client = new Client({intents: [GatewayIntentBits.guilds,GatewayIntentBits.GuildMessages]})

client.on("ready",()=>{
    console.log("Connected as "+ client.user.tag)
})

client.login("MTA1NTIzODc2NDUzODEwMTc3MA.GjHxLo.YWHix5aqvSCa1NqeDi10BQIMPHleoyBliKwrX8")