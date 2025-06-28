import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("Geeft Pong terug!");

export async function execute(interaction: ChatInputCommandInteraction) {
  await interaction.reply("🏓 Pong!");
}
