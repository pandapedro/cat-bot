import type Bot from '../utilities/Bot';
import type { ClientEvents } from 'eris';

export default class DefaultEvent {
	constructor(
		public readonly name: keyof ClientEvents,
		public readonly bot: Bot,
		public type: 'on' | 'once' = 'on'
	) {}

	public run(...args: unknown[]): void {
		throw new Error('Not implemented.');
	}
}
