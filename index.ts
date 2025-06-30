import { Bot, InlineKeyboard } from "grammy";

const token = process.env.BOT_TOKEN;

if (!token) {
  throw new Error("BOT_TOKEN is not set");
}

const bot = new Bot(token);

const inlineKeyboard = new InlineKeyboard()
  .url("Наш канал", "https://t.me/itsnetizen")
  .row()
  .webApp("Открыть приложение", "https://netizenworld.ru");

bot.command("start", async (ctx) => {
  await ctx.replyWithPhoto("https://champtracker-backend.vercel.app/images/net.jpeg", {
    caption: `*Добро пожаловать в НЭТИЗЕН WORLD!*

 • Проходи тесты 🔨
 • Зарабатывай монеты 💎 
 • Трать их \\[ВСТАВИТЬ НА ЧТО ТРАТИТЬ]\ ⚠️

 Да, мы пока не знаем на что можно тратить монеты, но обязательно придумаем и реализуем (но это тяжело хех)

🏃‍♂️Если у тебя есть канал в ТГ или же ты просто хочешь сделать квиз и пошарить его на нэтизенов — пиши нам🏃‍♂️`,
    reply_markup: inlineKeyboard,
    parse_mode: "Markdown",
  });
});

bot.on("message", async (ctx) => {
  const userMessage = ctx.message.text;
  
  if (!userMessage) {
    return;
  }

  await ctx.api.sendChatAction(ctx.chat.id, 'typing');

;
});

bot.start();
