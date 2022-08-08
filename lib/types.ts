import { LayoutConfig } from './classes/CloudLayout';

export type Cloud = {
	id: string;
	title: string;
	ts: number;
	wordArray: WordInstance[];
	layout: LayoutConfig;
	// true = file, false = text
	source: boolean;
	textArea?: string;
};

export type Rotation = 'none' | 'right' | 'random' | undefined;

export type WordInstance = {
	word: string;
	instances: number;
	enabled: boolean;
};
