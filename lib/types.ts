import { LayoutConfig } from './classes/CloudLayout';

export type Cloud = {
	id: string;
	title: string;
	ts: number;
	wordArray: Word[];
	layout: LayoutConfig;
};

export type Rotation = 'none' | 'right' | 'random' | undefined;

export type Word = { text: string; size: number; enabled: boolean };
