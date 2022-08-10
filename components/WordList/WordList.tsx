import WordListRow from './WordListRow';
import { FixedSizeList as List } from 'react-window';
import { useCloudContext } from '../../lib/context/CloudContext';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import useWidth from '../../lib/hooks/useWidth';

const WordList = () => {
	const [rendered, setRendered] = useState(false);
	const {
		cloud: { wordArray },
	} = useCloudContext();

	const widthRef = useRef() as MutableRefObject<HTMLDivElement>;
	// Updates component when widthRef is resized
	useWidth(widthRef);

	useEffect(() => {
		setRendered(true);
	}, []);
	return (
		<>
			<div
				ref={widthRef}
				className='w-full flex flex-row justify-start border-b border-neutral-200'
			>
				<div className='font-normal text-neutral-400 w-[5ch]'>No.</div>
				<div className='w-[25%] font-semibold'>Show</div>
				<div className='w-[35%] font-semibold'>Word</div>
				<div className='font-semibold'>Instances</div>
			</div>
			{rendered && (
				<List
					className='w-full'
					height={400}
					itemCount={wordArray.length}
					itemSize={30}
					width={widthRef.current.clientWidth}
				>
					{WordListRow}
				</List>
			)}
		</>
	);
};

export default WordList;
