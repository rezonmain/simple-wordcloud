import { ChangeEvent, useEffect, useState } from 'react';
import useWindowSize from '../../lib/hooks/useWindow';
import TextParser from '../../lib/TextParser';
import WordCloud from '../WordCloud/WordCloud';

const FileDropper = () => {
	const [wordsArray, setWordsArray] =
		useState<{ text: string; size: number }[]>();
	const [cloud, setCloud] = useState<JSX.Element | undefined>();
	const windowSize = useWindowSize();

	const handleChange = async (e: ChangeEvent) => {
		const t = new TextParser();
		const wordsArray = await t.getDataFromEvent(e);
		setWordsArray(wordsArray);
	};

	useEffect(() => {
		wordsArray &&
			setCloud(<WordCloud size={windowSize} wordsArray={wordsArray} />);
	}, [wordsArray, windowSize]);

	return (
		<>
			{cloud && cloud}
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
