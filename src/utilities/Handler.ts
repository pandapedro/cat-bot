import type Bot from '..';
import { promisify } from 'util';
import { glob, IOptions } from 'glob';
const pg: (
	pattern: string,
	options?: IOptions | undefined
) => Promise<string[]> = promisify(glob);

export default async function Handler(bot: Bot) {
	for (let i of await pg('dist/src/events/**/*.js')) {
		let event = require(`..${i.replace('dist/src', '')}`);

		event = new event.default(bot);

		let type: 'on' | 'once' = event.type;

		bot[type](`${event.name}`, (...args: unknown[]) => event.run(...args));
	}

	for (let i of await pg('dist/src/commands/**/*.js')) {
		let command = require(`..${i.replace('dist/src', '')}`);

		command = new command.default(bot);

		bot.commands.add(command);

		bot.createCommand(command.slash);
	}
}
