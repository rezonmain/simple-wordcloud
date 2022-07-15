import { ChangeEvent, useEffect, useState } from 'react';
import { LayoutConfig } from '../../lib/Layout';
import TextParser from '../../lib/TextParser';
import WordCloud from '../WordCloud/WordCloud';

const FileDropper = () => {
	const [wordsArray, setWordsArray] =
		useState<{ text: string; size: number }[]>();

	const [config, setConfig] = useState<LayoutConfig | undefined>();

	const handleChange = async (e: ChangeEvent) => {
		const t = new TextParser();
		const wordsArray = await t.getDataFromEvent(e);
		setWordsArray(wordsArray);
	};

	return (
		<>
			{wordsArray && <WordCloud wordsArray={wordsArray} config={config} />}
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
