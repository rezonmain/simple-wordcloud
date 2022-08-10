import { nanoid } from 'nanoid';
import defaultText from '../data';
import { WordInstance } from '../types';
import CloudLayout, { LayoutConfig } from './CloudLayout';

class Cloud {
	id: string;
	title: string;
	ts: number;
	wordArray: WordInstance[];
	layout: LayoutConfig;
	// true for file, false for text
	source: boolean;
	textAreaValue: string;
	// Create a new cloud for the /create page with unique id
	constructor() {
		this.id = nanoid();
		this.title = 'untitled';
		this.ts = Date.now();
		this.wordArray = [];
		this.layout = CloudLayout.DEFAULT;
		this.source = false;
		this.textAreaValue = defaultText;
		return {
			...this,
		};
	}
}
export default Cloud;
