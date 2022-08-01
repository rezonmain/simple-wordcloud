import { ChangeEvent } from 'react';
import { useCloudContext } from '../../lib/context/CloudContext';
import WordListRow from './WordListRow';

const WordList = () => {
	const {
		cloud: { wordArray },
		dispatch,
	} = useCloudContext();
	const onChange = (e: ChangeEvent<HTMLInputElement>, word: string) => {
		console.log(e, word);
		// TODO: call dispatch to update the enabled value of word
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
					<th>Show?</th>
					<th>Word</th>
					<th>Value</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	);
};

export default WordList;
