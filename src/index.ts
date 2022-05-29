import { Client } from 'eris';

export default class Bot extends Client {
	constructor() {
		super(`Bot ${process.env.TOKEN}`, {
			restMode: true,
			maxShards: 'auto',
			intents: ['guilds', 'guildMembers', 'guildVoiceStates'],
		});
	}
}
