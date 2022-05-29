import "./utilities/i18n";
import { Client } from 'eris';
import "./utilities/ModuleAlias";
import DefaultCommand from './interfaces/Command';

export default class Bot extends Client {
	public commands = new Set<DefaultCommand>();

	constructor() {
		super(`Bot ${process.env.TOKEN}`, {
			restMode: true,
			maxShards: 'auto',
			intents: ['guilds', 'guildMembers', 'guildVoiceStates'],
		});
	}
}
