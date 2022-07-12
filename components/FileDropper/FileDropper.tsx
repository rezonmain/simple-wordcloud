import { ChangeEvent, useState } from 'react';
import TextParser from '../../lib/TextParser';
import WordCloud from '../WordCloud/WordCloud';

const FileDropper = () => {
	const [data, setData] = useState<{ text: string; size: number }[]>();

	const handleChange = async (e: ChangeEvent) => {
		const t = new TextParser();
		const input = e.target as HTMLInputElement;
		const file = input.files![0];
		const words = await t.getWordsFromFile(file);
		const wordCount = t.countWordInstance(words);
		const dataObject = Object.entries(wordCount).map((entry) => ({
			text: entry[0],
			size: entry[1],
		}));
		setData(dataObject);
	};

	return (
		<>
			{data && <WordCloud data={data} />}
			<form>
				<input
					type='file'
					accept={TextParser.acceptedStr}
					onChange={(e) => handleChange(e)}
				/>
			</form>
		</>
	);
};

export default FileDropper;
