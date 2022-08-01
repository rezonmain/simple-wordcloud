import { Checkbox } from '@chakra-ui/react';
import { ChangeEvent } from 'react';

export type WordListRowProps = {
	index: number;
	word: string;
	value: number;
	enabled: boolean;
	onChange: (e: ChangeEvent<HTMLInputElement>, word: string) => void;
};

const WordListRow = ({
	index,
	word,
	value,
	enabled,
	onChange,
}: WordListRowProps) => {
	return (
		<tr className='items-center hover:bg-neutral-100 active:bg-neutral-100'>
			<td className='text-neutral-400 border-b border-r'>{index}</td>
			<td className=' pl-4 border-b'>
				<Checkbox isChecked={enabled} onChange={(e) => onChange(e, word)} />
			</td>
			<td className='border-b text-lg pr-10'>{word}</td>
			<td className='border-b pr-10'>{value}</td>
		</tr>
	);
};

export default WordListRow;
