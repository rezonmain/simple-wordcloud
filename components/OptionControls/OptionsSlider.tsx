import {
	Slider,
	SliderThumb,
	SliderTrack,
	SliderFilledTrack,
	Box,
} from '@chakra-ui/react';
import { useState } from 'react';

const OptionSlider = () => {
	const [sliderValue, setSliderValue] = useState(30);
	return (
		<div id='slider-container' className='font-serif flex flex-col gap-4'>
			<div className='flex flex-row gap-2 items-center'>
				<label htmlFor='slide-value'>Word Limit:</label>
				<input
					type='text'
					name='slide-value'
					disabled
					value={sliderValue}
					className='h-10 border border-neutral-400 rounded-md bg-neutral-100 w-12 text-center'
				/>
				<span>words</span>
			</div>
			<Slider
				aria-label='slider-ex-1'
				defaultValue={30}
				size={'lg'}
				onChange={(v) => setSliderValue(v)}
				value={sliderValue}
			>
				<SliderTrack rounded={'full'} bg={'#f5f5f5'} h={2}>
					<SliderFilledTrack bg={'#262626'} />
				</SliderTrack>
				<SliderThumb boxSize={5} />
			</Slider>
		</div>
	);
};
export default OptionSlider;
