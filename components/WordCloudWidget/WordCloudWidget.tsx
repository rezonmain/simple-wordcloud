import WordCloud from '../WordCloud/WordCloud';
import demo from '../../lib/data';
import { useGesture, usePinch } from '@use-gesture/react';
import { MutableRefObject, useMemo, useRef, useState } from 'react';

const WordCloudWidget = () => {
	const [pan, setPan] = useState({ x: 0, y: 0 });
	const [zoom, setZoom] = useState(1);
	const divRef = useRef() as MutableRefObject<HTMLDivElement>;
	// Use memo is to control the WordCloud rendering
	const wordCloud = useMemo(
		() => (
			<WordCloud size={{ w: 900, h: 900 }} wordsArray={demo[0].wordArray} />
		),
		[demo[0].wordArray]
	);

	const bind = useGesture({
		onDrag: ({ offset: [dx, dy] }) => setPan({ x: dx, y: dy }),
		onPinch: ({ delta: [z, _] }) => setZoom((prev) => prev + z),
	});

	return (
		<div className='overflow-scroll border border-neutral-800 aspect-square'>
			<div
				{...bind()}
				style={{
					transform: `scale(${zoom})`,
					touchAction: 'none',
					left: pan.x,
					top: pan.y,
				}}
				className='relative cursor-grab active:cursor-grabbing'
			>
				{wordCloud}
			</div>
		</div>
	);
};

export default WordCloudWidget;
