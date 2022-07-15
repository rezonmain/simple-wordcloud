import { ChangeEvent, useState } from 'react';
import { LayoutConfig } from '../../lib/Layout';

interface WordCloudControlsProps {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	values: LayoutConfig;
}

const WordCloudControls = ({ onChange, values }: WordCloudControlsProps) => {
	return (
		<form>
			<label htmlFor='limit'>Word Limit:</label>
			<input
				onChange={onChange}
				name='limit'
				type='number'
				value={values.limit}
			/>
		</form>
	);
};

export default WordCloudControls;
