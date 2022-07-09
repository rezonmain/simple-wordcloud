import { ChangeEvent } from 'react';
import TextParser from '../../lib/TextParser';

const FileInput = () => {
	const handleChange = async (e: ChangeEvent) => {
		const t = new TextParser();
		const input = e.target as HTMLInputElement;
		const file = input.files![0];
		const words = await t.getWordsFromFile(file);
		const wordCount = t.countWordInstance(words);
	};

	return (
		<form>
			<input
				type='file'
				accept={TextParser.acceptedStr}
				onChange={(e) => handleChange(e)}
			/>
		</form>
	);
};

export default FileInput;
