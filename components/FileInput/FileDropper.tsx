import { ChangeEvent } from 'react';
import TextParser from '../../lib/TextParser';

const FileInput = () => {
	const handleChange = async (e: ChangeEvent) => {
		const t = new TextParser();
		const input = e.target as HTMLInputElement;
		const file = input.files![0];
		console.log(await t.getTextFromFile(file));
	};

	return (
		<form>
			<input
				type='file'
				accept='.txt,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf'
				onChange={(e) => handleChange(e)}
			/>
		</form>
	);
};

export default FileInput;
