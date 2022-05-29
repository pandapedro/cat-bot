import Bot from './utilities/Bot';
import Handler from './utilities/Handler';

const bot: Bot = new Bot();

bot.connect().then(async () => await Handler(bot));
