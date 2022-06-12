const { Telegraf } = require("telegraf");

const TOKEN = "5591931867:AAFjRvJT4_r0nz05OfWiD02ezttgr7Gh0aI";
const bot = new Telegraf(TOKEN);
const web_link = "https://retaillux-24005.web.app/";
bot.start((ctx) => ctx.reply("Welcome", {reply_markup:{keyboard:[[{text: "web app", web_app: {url:web_link} }]]}}));

bot.launch();
