import WordCloud from '../WordCloud/WordCloud';
import demo from '../../lib/data';
import { usePinch } from '@use-gesture/react';
import { MutableRefObject, useMemo, useRef, useState } from 'react';

const WordCloudWidget = () => {
	const [zoom, setZoom] = useState(1);
	const divRef = useRef() as MutableRefObject<HTMLDivElement>;
	// Use memo is to control the WordCloud rendering
	const wordCloud = useMemo(
		() => (
			<WordCloud size={{ w: 900, h: 900 }} wordsArray={demo[0].wordArray} />
		),
		[demo[0].wordArray]
	);
	usePinch(
		(state) => {
			setZoom((prev) => prev + state.delta[0]);
		},
		{ target: divRef }
	);
	return (
		<div
			ref={divRef}
			className='overflow-scroll border border-neutral-800 aspect-square'
		>
			<div style={{ transform: `scale(${zoom})` }}>{wordCloud}</div>
		</div>
	);
};

export default WordCloudWidget;
