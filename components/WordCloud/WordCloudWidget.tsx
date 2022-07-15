import { ChangeEvent, useState } from 'react';
import Layout from '../../lib/Layout';
import WordCloudControls from '../WordCloudControls/WordCloudControls';

const WordCloudWidget = () => {
	const [config, setConfig] = useState(Layout.DEFAULT);

	const onFormChange = (e: ChangeEvent<HTMLInputElement>) => {
		console.log(e);
	};

	return (
		<>
			<WordCloudControls onChange={onFormChange} values={config} />
		</>
	);
};

export default WordCloudWidget;
