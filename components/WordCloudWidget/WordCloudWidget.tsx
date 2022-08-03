import WordCloud from '../WordCloud/WordCloud';
import demo from '../../lib/data';
import { useGesture } from '@use-gesture/react';
import { RefObject, useEffect, useMemo, useRef, useState } from 'react';
import useMedia from '../../lib/hooks/useMedia';
import { useCloudContext } from '../../lib/context/CloudContext';

/* 
	TODO:
	[ ] Make the zoom-in/out from the pinch origin or mouse position
	[ ] Allow zoom-in/out with scroll wheel
*/

const WordCloudWidget = () => {
	const [pan, setPan] = useState({ x: 0, y: 0, scale: 1 });
	const isTouch = useMedia('(hover: none) and (pointer: coarse)');
	const {
		cloud: { wordArray },
	} = useCloudContext();

	const divRef = useRef() as RefObject<HTMLDivElement>;
	// useMemo is to control the WordCloud rendering
	const wordCloud = useMemo(
		() => <WordCloud size={{ w: 1000, h: 1000 }} wordArray={wordArray} />,
		[wordArray]
	);

	// Touch gestures:
	const bind = useGesture({
		onDrag: ({ offset: [dx, dy] }) =>
			setPan((prev) => ({ ...prev, x: dx, y: dy })),
		onPinch: ({ delta: [z, _] }) =>
			setPan((prev) => ({ ...prev, scale: prev.scale + z })),
	});

	useEffect(() => {
		const scale = (divRef.current?.clientWidth as number) / 1000;
		setPan((prev) => ({ ...prev, scale }));
	}, []);

	return (
		<div className='overflow-hidden border border-neutral-800 aspect-square'>
			<div
				{...bind()}
				ref={divRef}
				style={{
					transform: `scale(${pan.scale})`,
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
