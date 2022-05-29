import 'colors';
import 'dotenv/config';
import Bot from './src';
import Handler from './src/utilities/Handler';
import { connect, CallbackError } from 'mongoose';

const bot: Bot = new Bot();

connect(`${process.env.MONGO_URI}`, (error: CallbackError) => {
	if (error) throw error;
	else console.log('Connected to MongoDB!'.blue);
});

bot.connect().then(async () => await Handler(bot));
