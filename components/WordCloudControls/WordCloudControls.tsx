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
				<option value='sq'>
					n^<sup>2</sup>
				</option>
			</select>
			<label htmlFor='padding'>Word spacing:</label>
			<input
				type='number'
				onChange={onChange}
				name='padding'
				value={values.padding}
			></input>
			<fieldset>
				<label htmlFor='values.rotation.rotations'>Rotations:</label>
				<input
					onChange={onChange}
					name='values.rotation.rotations'
					type='number'
					value={values.rotation?.rotations}
				></input>
				<label htmlFor='rotation.angle.from'>
					From: {values.rotation?.angle?.from}
					<sup>o</sup>
				</label>
				<input
					name='rotation.angle.from'
					onChange={onChange}
					type='range'
					min='-90'
					max='90'
					value={values.rotation?.angle?.from}
				></input>

				<label htmlFor='rotation.angle.to'>
					To: {values.rotation?.angle?.to}
				</label>
				<input
					name='rotation.angle.to'
					onChange={onChange}
					type='range'
					min='-90'
					max='90'
					value={values.rotation?.angle?.to}
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
