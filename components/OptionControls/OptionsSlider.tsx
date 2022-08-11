import {
	Slider,
	SliderThumb,
	SliderTrack,
	SliderFilledTrack,
	Box,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useCloudContext } from '../../lib/context/CloudContext';

const OptionSlider = () => {
	const {
		cloud: {
			layout: { limit },
		},
		dispatch,
	} = useCloudContext();
	const [sliderValue, setSliderValue] = useState(limit);

	// Set local state to limit on re-render
	// This is necesary for the settings reset to work
	useEffect(() => {
		setSliderValue(limit);
	}, [limit]);

	const onChangeEnd = (value: number) => {
		dispatch({ type: 'changeLimit', payload: value });
	};
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
				min={0}
				max={150}
				aria-label='slider-ex-1'
				size={'lg'}
				onChange={(v) => setSliderValue(v)}
				onChangeEnd={onChangeEnd}
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
