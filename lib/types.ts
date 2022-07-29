import { LayoutConfig } from './CloudLayout';

export type Cloud = {
	id: string;
	title: string;
	ts: number;
	wordArray: { text: string; size: number; enabled: boolean }[];
	layout: LayoutConfig;
};
