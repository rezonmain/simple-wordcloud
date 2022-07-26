import { LegacyRef } from 'react';
import { useMeasure } from 'react-use';
import Divider from '../Divider/Divider';
import SVG from './svg';
const Hero = () => {
	const [ref, { width }] = useMeasure();
	return (
		<div
			ref={ref as LegacyRef<HTMLDivElement>}
			id='hero'
			className='flex flex-col gap-3 justify-center'
		>
			<div
				id='wordcloud-title'
				style={{ height: width }}
				className='flex justify-center items-center'
			>
				<SVG factor={width / 320.849} />
			</div>
			<Divider />

			<h4 className='font-serif text-xl font-normal'>
				Generate from text or upload document, download generated word cloud in
				image or pdf format.
			</h4>
		</div>
	);
};

export default Hero;
