import { ChangeEvent, useEffect, useState } from 'react';
import TextParser from '../../lib/TextParser';
import WordCloud from '../WordCloud/WordCloud';

const FileDropper = () => {
	const [wordsArray, setWordsArray] =
		useState<{ text: string; size: number }[]>();

	const handleChange = async (e: ChangeEvent) => {
		const t = new TextParser();
		const wordsArray = await t.getDataFromEvent(e);
		setWordsArray(wordsArray);
	};

	return (
		<>
			{wordsArray && <WordCloud wordsArray={wordsArray} />}
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
