import 'colors';
import Bot from '..';
import DefaultEvent from '../interfaces/Event';

export default class Event extends DefaultEvent {
	constructor(bot: Bot) {
		super('ready', bot, 'once');
	}

	async run() {
		console.log(`${this.bot.user.username} online!`.green);
	}
}
