import { Bot } from "grammy";
import { getAiAnswer } from "./ai";
const token = process.env.BOT_TOKEN;

if (!token) {
  throw new Error("BOT_TOKEN is not set");
}

const bot = new Bot(token);

bot.command("start", (ctx) => ctx.reply("Hi, im an ai assistant"));

bot.on("message", async (ctx) => {
  if (ctx.message.text) {
    const answer = await getAiAnswer(ctx.message.text);
    ctx.reply(answer);
  }
});

bot.start();
