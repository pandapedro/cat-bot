declare global {
	namespace NodeJS {
		interface ProcessEnv {
			TOKEN: string;
			MONGO_URI: string;
		}
	}
}

export {};
