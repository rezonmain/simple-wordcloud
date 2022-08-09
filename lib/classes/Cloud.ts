import { nanoid } from 'nanoid';
import CloudLayout from './CloudLayout';

class Cloud {
	constructor() {
		return {
			id: nanoid(),
			title: 'untitled',
			ts: Date.now(),
			wordArray: [{ word: 'create', instances: 90, enabled: true }],
			layout: CloudLayout.DEFAULT,
			// true for file, false for text
			source: false,
			textAreaValue: 'hello',
		};
	}
}
export default Cloud;
