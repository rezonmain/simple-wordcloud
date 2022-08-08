import { LayoutConfig } from './classes/CloudLayout';

export type Cloud = {
	id: string;
	title: string;
	ts: number;
	wordArray: WordInstance[];
	layout: LayoutConfig;
	// true for file, false for text
	source: boolean;
	textAreaValue: string;
};

export type Rotation = 'none' | 'right' | 'random' | undefined;

export type WordInstance = {
	word: string;
	instances: number;
	enabled: boolean;
};
