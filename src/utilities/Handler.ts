import { glob } from 'glob';
import type Bot from '..';
import { promisify } from 'util';
const pg: Function = promisify(glob);

export default async function Handler(bot: Bot) {
	for (let i of await pg('dist/src/events/**/*.js')) {
		let event = require(`..${i.replace('dist/src', '')}`);

		event = new event.default(bot);

		let type: 'on' | 'once' = event.type;

		bot[type](`${event.name}`, (...args: unknown[]) => event.run(...args));
	}
}
