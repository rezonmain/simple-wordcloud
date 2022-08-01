import { Checkbox } from '@chakra-ui/react';
import { ChangeEvent } from 'react';

export type WordListRowProps = {
	word: string;
	value: number;
	enabled: boolean;
	onChange: (e: ChangeEvent<HTMLInputElement>, word: string) => void;
};

const WordListRow = ({ word, value, enabled, onChange }: WordListRowProps) => {
	return (
		<tr className='items-center border-b'>
			<td className='border'>
				<Checkbox isChecked={enabled} onChange={(e) => onChange(e, word)} />
			</td>
			<td className='border'>{word}</td>
			<td className='border'>{value}</td>
		</tr>
	);
};

export default WordListRow;
