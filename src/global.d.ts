declare module '*';
declare module 'react-minimap';

declare namespace NodeJS {
	interface ProcessEnv {
		SPACE: string;
		TOKEN: string;
	}
}
