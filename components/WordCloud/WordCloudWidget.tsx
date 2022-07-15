import { prepareServerlessUrl } from 'next/dist/server/base-server';
import { ChangeEvent, useEffect, useState } from 'react';
import Layout from '../../lib/Layout';
import TextParser from '../../lib/TextParser';
import FileDropper from '../FileDropper/FileDropper';
import WordCloudControls from '../WordCloudControls/WordCloudControls';
import WordCloud from './WordCloud';

/* FIXME: 
	1. Bug where app crashes when limit is set to nothing
	2. Bug where words stack on eachother when rotations is set to 1 and angleTo 0
	3. Fix bug where words sometimes start stacking on eachother
	4. Sliders are kind of annoying for changing word rotation
   */

const WordCloudWidget = () => {
	const [config, setConfig] = useState(Layout.DEFAULT);
	const [words, setWords] = useState<{ text: string; size: number }[]>();
	const onFormChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value, type } = e.target;
		const { checked } = e.target as HTMLInputElement;
		setConfig((prev) => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	const onFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
		const t = new TextParser();
		const wordsArray = await t.getDataFromEvent(e);
		setWords(wordsArray);
	};

	return (
		<>
			{words && <WordCloud wordsArray={words} config={config} />}
			<WordCloudControls onChange={onFormChange} values={config} />
			<FileDropper handleChange={onFileChange} />
		</>
	);
};

export default WordCloudWidget;
