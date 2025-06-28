import { Client, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";
config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once("ready", () => {
  console.log(`✅ Ingelogd als ${client.user?.tag}`);
});

client.login(process.env.TOKEN);
