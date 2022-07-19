import { motion } from 'framer-motion';
import { ChangeEvent, useState } from 'react';
import { LayoutConfig } from '../../lib/Layout';
import { RiArrowDownSLine } from 'react-icons/ri';

interface WordCloudControlsProps {
	onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
	values: LayoutConfig;
}

const WordCloudControls = ({ onChange, values }: WordCloudControlsProps) => {
	const [show, setShow] = useState(false);
	const controlsAnimateState = {
		hide: { height: '0px' },
		show: { height: '100%' },
	};

	const arrowAnimateState = {
		hide: { rotate: 0 },
		show: { rotate: -180 },
	};

	return (
		<div id='controls-container' className='border'>
			<div
				onClick={() => setShow((prev) => !prev)}
				id='showcontrols-container'
				className='flex flex-row items-center gap-2 cursor-pointer'
			>
				<p>{show ? 'Hide' : 'Show'} controls</p>
				<motion.div
					id='arrow-container'
					className='w-fit h-fit'
					animate={show ? 'show' : 'hide'}
					variants={arrowAnimateState}
				>
					<RiArrowDownSLine></RiArrowDownSLine>
				</motion.div>
			</div>
			<motion.div
				className='overflow-hidden'
				animate={show ? 'show' : 'hide'}
				variants={controlsAnimateState}
			>
				<form>
					<label htmlFor='limit'>Word Limit:</label>
					<input
						min='1'
						max='300'
						onChange={onChange}
						name='limit'
						type='number'
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
						max='10'
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
			</motion.div>
		</div>
	);
};

export default WordCloudControls;
