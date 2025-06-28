import { REST, Routes } from "discord.js";
import { config } from "dotenv";
import * as pingCommand from "./commands/ping.js"; // let op het .js einde bij ESModules

config();

const commands = [pingCommand.data.toJSON()];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN!);

(async () => {
  try {
    console.log("🔁 Deploying commands...");
    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID!),
      { body: commands }
    );
    console.log("✅ Commands deployed.");
  } catch (error) {
    console.error(error);
  }
})();
