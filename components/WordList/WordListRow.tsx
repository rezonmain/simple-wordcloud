import { ChangeEvent, CSSProperties } from 'react';
import { useCloudContext } from '../../lib/context/CloudContext';

const WordListRow = ({
	index,
	style,
}: {
	index: number;
	style: CSSProperties;
}) => {
	const {
		cloud: { wordArray },
		dispatch,
	} = useCloudContext();

	const wordInstance = wordArray[index];

	// Update global state on checkbox toggle
	const onChange = (e: ChangeEvent<HTMLInputElement>, word: string) => {
		const state = e.target.checked;
		const newArray = structuredClone(wordArray);
		const index = newArray.findIndex((el) => el.word === word);
		newArray[index].enabled = state;
		dispatch({ type: 'toggleWord', payload: newArray });
	};

	return (
		<div
			style={style}
			className='flex flex-row justify-start hover:bg-neutral-100 active:bg-neutral-100 border-b border-neutral-300'
		>
			<div className='text-neutral-400 w-[5ch]'>{index + 1}</div>
			<div className=' pl-4 w-[25%]'>
				<input
					type={'checkbox'}
					checked={wordInstance.enabled}
					onChange={(e) => onChange(e, wordInstance.word)}
				/>
			</div>
			<div className=' text-lg pr-10 w-[40%]'>{wordInstance.word}</div>
			<div className=' pr-10'>{wordInstance.instances}</div>
		</div>
	);
};

export default WordListRow;
