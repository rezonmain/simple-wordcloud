import { ChangeEvent, useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../../lib/Layout';
import TextParser from '../../lib/TextParser';
import FileDropper from '../FileDropper/FileDropper';
import WordCloudControls from '../WordCloudControls/WordCloudControls';
import WordCloud from './WordCloud';

/* FIXME: 
	[~] 1. Bug where app crashes when limit is set to nothing
	[x] 2. Bug where words stack on eachother when rotations is set to 1 and angleTo 0
	3. Fix bug where words sometimes start stacking on eachother
	4. Sliders are kind of annoying for changing word rotation
   */

/* TODO:
	[ ] Just scale the wordcloud when resizing window, don't regenerate wordcloud
 */

const WordCloudWidget = () => {
	const [config, setConfig] = useState(Layout.DEFAULT);
	const [words, setWords] = useState<{ text: string; size: number }[]>();
	const [showContols, setShowControls] = useState(false);
	const onFormChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, type, value } = e.target;
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
