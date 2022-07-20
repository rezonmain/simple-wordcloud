import { useContext } from 'react';
import { ControlsContext } from '../WordCloud/WordCloudWidget';

const WordControls = () => {
	const { values, onChange } = useContext(ControlsContext) as ControlsContext;
	return (
		<fieldset id='words-set' className='border p-1'>
			<legend>Words</legend>
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
				<option value='serif'>Serif</option>
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
				max='10'
				type='number'
				onChange={onChange}
				name='padding'
				value={values.padding}
			></input>
		</fieldset>
	);
};

export default WordControls;
