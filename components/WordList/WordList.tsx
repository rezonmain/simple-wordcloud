import { ChangeEvent } from 'react';
import { useCloudContext } from '../../lib/context/CloudContext';
import WordListRow from './WordListRow';

const WordList = () => {
	const {
		cloud: { wordArray },
		dispatch,
	} = useCloudContext();

	// Update global state on checkbox toggle
	const onChange = (e: ChangeEvent<HTMLInputElement>, word: string) => {
		const state = e.target.checked;
		const newArray = structuredClone(wordArray);
		const index = newArray.findIndex((el) => el.text === word);
		newArray[index].enabled = state;
		dispatch({ type: 'toggleWord', payload: newArray });
	};

	const rows = wordArray.map((word, index) => (
		<WordListRow
			key={word.text}
			index={index + 1}
			word={word.text}
			value={word.size}
			enabled={word.enabled}
			onChange={onChange}
		/>
	));

	return (
		<table className='w-full'>
			<thead className='text-left'>
				<tr>
					<th className=' font-normal text-neutral-400'>No.</th>
					<th>Show</th>
					<th>Word</th>
					<th>Value</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	);
};

export default WordList;
