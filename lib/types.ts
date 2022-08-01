import { LayoutConfig } from './CloudLayout';

export type Cloud = {
	id: string;
	title: string;
	ts: number;
	wordArray: { text: string; size: number; enabled: boolean }[];
	layout: LayoutConfig;
};

export type Rotation = 'none' | 'right' | 'random' | undefined;
