import { Bot } from "grammy";

const token = process.env.BOT_TOKEN;

if (!token) {
  throw new Error("BOT_TOKEN is not set");
}

const bot = new Bot(token);

bot.on("message", (ctx) => ctx.reply("Hi there!"));

bot.start();
