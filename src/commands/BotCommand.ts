import Bot from '..';
import DefaultCommand from '../interfaces/Command';
import { CommandInteraction as SlashCommand } from 'eris';

export default class Command extends DefaultCommand {
	constructor(bot: Bot) {
		super(
			{
				type: 1,
				name: 'bot',
				defaultPermission: false,
				description: '[Information]',
			},
			bot
		);
	}

	async run(slash: SlashCommand, locale: string) {
		slash.createMessage('Pong!');
	}
}
