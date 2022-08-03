import WordCloud from '../WordCloud/WordCloud';
import { useGesture } from '@use-gesture/react';
import { RefObject, useEffect, useMemo, useRef, useState } from 'react';
import useMedia from '../../lib/hooks/useMedia';
import { useCloudContext } from '../../lib/context/CloudContext';
import useWindow from '../../lib/hooks/useWindow';

const WordCloudWidget = ({ refresh }: { refresh: number }) => {
	const [pan, setPan] = useState({ x: 0, y: 0, scale: 1 });
	// TODO: Handle gestures according to type of input
	// const isTouch = useMedia('(hover: none) and (pointer: coarse)');
	const { w: windowWidth } = useWindow();
	const {
		cloud: { wordArray, layout },
	} = useCloudContext();

	const divRef = useRef() as RefObject<HTMLDivElement>;

	// useMemo is used to control the WordCloud re-rendering
	const wordCloud = useMemo(
		() => (
			<WordCloud
				size={{ w: 1000, h: 1000 }}
				wordArray={wordArray}
				config={layout}
			/>
		),
		[refresh]
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
	}, [windowWidth]);

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
