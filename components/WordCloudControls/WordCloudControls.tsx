import { ChangeEvent, useState } from 'react';
import { LayoutConfig } from '../../lib/Layout';

interface WordCloudControlsProps {
	onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
	values: LayoutConfig;
}

const WordCloudControls = ({ onChange, values }: WordCloudControlsProps) => {
	return (
		<form>
			<label htmlFor='limit'>Word Limit:</label>
			<input
				min='1'
				max='300'
				onChange={onChange}
				name='limit'
				type='number'
				value={values.limit}
			/>
			<label htmlFor='font'>Font:</label>
			<select onChange={onChange} name='font' value={values.font}>
				<option value='Helvetica'>Helvetica</option>
				<option value='Impact'>Impact</option>
			</select>
			<label htmlFor='scaling'>Word Scaling:</label>
			<select onChange={onChange} name='scaling' value={values.scaling}>
				<option value='linear'>Linear</option>
				<option value='log'>Logarithmic</option>
				<option value='sq'>n2</option>
			</select>
			<label htmlFor='padding'>Word spacing:</label>
			<input
				min='1'
				max='5'
				type='number'
				onChange={onChange}
				name='padding'
				value={values.padding}
			></input>
			<fieldset>
				<label htmlFor='rotations'>Rotations:</label>
				<input
					min='1'
					max='100'
					onChange={onChange}
					name='rotations'
					type='number'
					value={values.rotations}
				></input>
				<label htmlFor='angleFrom'>
					From: {values.angleFrom}
					<sup>o</sup>
				</label>
				<input
					name='angleFrom'
					onChange={onChange}
					type='range'
					min='-90'
					max={values.angleTo}
					value={values.angleFrom}
				></input>

				<label htmlFor='angleTo'>To: {values.angleTo}</label>
				<input
					name='angleTo'
					onChange={onChange}
					type='range'
					min={values.angleFrom}
					max='90'
					value={values.angleTo}
				/>
			</fieldset>

			<fieldset>
				<label htmlFor='includeStopWords'>Stop Words:</label>
				<input
					onChange={onChange}
					name='includeStopWords'
					type='checkbox'
					checked={values.includeStopWords}
				></input>
				<label htmlFor='includePronouns'>Pronouns</label>
				<input
					onChange={onChange}
					name='includePronouns'
					type='checkbox'
					checked={values.includePronouns}
				></input>
				<label htmlFor='lang'>Language:</label>
				<select onChange={onChange} name='lang' value={values.lang}>
					<option value='eng'>English</option>
					<option value='esp'>Spanish</option>
					<option value='fra'>French</option>
				</select>
			</fieldset>
		</form>
	);
};

export default WordCloudControls;
