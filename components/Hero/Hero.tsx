import Divider from '../Divider/Divider';

const Hero = () => {
	return (
		<div id='hero' className='flex flex-col gap-3 justify-center'>
			<h1 className='font-serif text-4xl text-justify leading-[56px]'>
				Create, nice & <b>S</b>imple <b>W</b>ord <b>C</b>louds
			</h1>
			<Divider />

			<h4 className='font-serif text-xl font-normal'>
				Generate from text or upload document, download generated word cloud in
				image or pdf format.
			</h4>
		</div>
	);
};

export default Hero;
