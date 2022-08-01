import { ChangeEvent } from 'react';
import demo from '../../lib/data';
import WordListRow from './WordListRow';

const WordList = () => {
	const onChange = (e: ChangeEvent<HTMLInputElement>, word: string) => {
		console.log(e, word);
		// toggle enable status of word
	};

	const rows = demo[0].wordArray.map((word) => (
		<WordListRow
			key={word.text}
			word={word.text}
			value={word.size}
			enabled={word.enabled}
			onChange={onChange}
		/>
	));

	return (
		<table className='border border-black'>
			<thead>
				<tr>
					<th>Show</th>
					<th>Word</th>
					<th>Values</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	);
};

export default WordList;
