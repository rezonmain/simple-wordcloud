import WordCloud from '../WordCloud/WordCloud';
import { useGesture } from '@use-gesture/react';
import { RefObject, useEffect, useMemo, useRef, useState } from 'react';
import { useCloudContext } from '../../lib/context/CloudContext';
import useWindow from '../../lib/hooks/useWindow';
import { Spinner } from '@chakra-ui/react';

const WordCloudWidget = ({
	refresh,
	loading,
	onLoadStart,
	onLoadEnd,
}: {
	refresh: number;
	loading: boolean;
	onLoadStart: () => void;
	onLoadEnd: () => void;
}) => {
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
				onLoadStart={onLoadStart}
				onLoadEnd={onLoadEnd}
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
			{loading && (
				<div className='w-full h-full flex flex-col justify-center items-center'>
					<Spinner
						thickness='4px'
						speed='0.65s'
						emptyColor='gray.200'
						color='black'
						size='xl'
					/>
				</div>
			)}
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
