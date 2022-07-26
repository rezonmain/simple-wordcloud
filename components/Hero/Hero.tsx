import Divider from '../Divider/Divider';
import SVG from './svg';
const Hero = () => {
	return (
		<div id='hero' className='flex flex-col gap-3 justify-center'>
			<div id='wordcloud-title' className='flex justify-center'>
				<SVG />
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
