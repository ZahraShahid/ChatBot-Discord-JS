const Discord = require("discord.js");
const { GatewayIntentBits } = require("discord.js");
const { TOKEN } = require("./config");

const client = new Discord.Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.on("ready", () => {
  console.log("Connected as " + client.user.tag);

  // the status to be displayed under the user
  // client.user.setActivity(" with JavaScript")
  client.user.setActivity("Youtube", { type: "WATCHING" });

  // displaying each guild
    [client.guilds].forEach(guild => {
      console.log(guild);
    });
});

client.login(TOKEN);
