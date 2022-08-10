import { nanoid } from 'nanoid';
import defaultText from '../data';
import CloudLayout from './CloudLayout';

class Cloud {
	// Create a new cloud for the /create page with unique id
	constructor() {
		return {
			id: nanoid(),
			title: 'untitled',
			ts: Date.now(),
			wordArray: [],
			layout: CloudLayout.DEFAULT,
			// true for file, false for text
			source: false,
			textAreaValue: defaultText,
		};
	}
}
export default Cloud;
