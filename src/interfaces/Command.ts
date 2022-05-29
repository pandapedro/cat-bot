import type Bot from '..';
import {
	CommandInteraction as SlashCommand,
	ChatInputApplicationCommandStructure as SlashCommandData,
} from 'eris';

export default class DefaultCommand {
	name: string;
	slash: SlashCommandData;

	constructor(data: SlashCommandData, public readonly bot: Bot) {
		this.slash = data;
		this.name = data.name;
	}

	public run(slash: SlashCommand, locale: string): void {
		throw new Error('Not implemented.');
	}
}
