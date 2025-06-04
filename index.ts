import { Bot } from "grammy";
import { getAiAnswer } from "./ai";

export type Mode = 'long' | 'short'
let mode: Mode = 'long'

const token = process.env.BOT_TOKEN;

if (!token) {
  throw new Error("BOT_TOKEN is not set");
}

const bot = new Bot(token);

bot.command("mode", (ctx) => {
  mode = mode === 'long' ? 'short' : 'long';
  ctx.reply(`Mode set to ${mode}. I am answering ${mode === 'long' ? 'in detail and comprehensively' : 'briefly and concisely'}`);
});


bot.command('start', (ctx) => {
  return ctx.reply(
    '👋 Hello! I am your AI assistant.\n\n' +
      'Just write me something, and I will try to help as clearly and usefully as possible.\n\n' +
      'Available commands:\n' +
      '/mode — switch response style (short or detailed)\n' +
      '/help — show this message again'
  );
});

bot.command('help', (ctx) => {
  return ctx.reply(
    '👋 Hello! I am your AI assistant.\n\n' +
      'Just write me something, and I will try to help as clearly and usefully as possible.\n\n' +
      'Available commands:\n' +
      '/mode — switch response style (short or detailed)\n' +
      '/help — show this message again'
  );
});

bot.on("message", async (ctx) => {
  const userMessage = ctx.message.text;
  
  if (!userMessage) {
    return;
  }

  await ctx.api.sendChatAction(ctx.chat.id, 'typing');

  const answer = await getAiAnswer(userMessage, mode);
  ctx.reply(answer);
});

bot.start();
