import { LegacyRef } from 'react';
import { useMeasure } from 'react-use';
import {
	BsFileEarmarkArrowUp,
	BsPencilSquare,
	BsCloudDownload,
} from 'react-icons/bs';
import Divider from '../Divider/Divider';
import SVG from './SVG';
import VLine from '../VLine/Vline';
const Hero = () => {
	const [ref, { width }] = useMeasure();
	return (
		<div
			ref={ref as LegacyRef<HTMLDivElement>}
			id='hero'
			className='flex flex-col gap-8 justify-center items-center w-full lg:flex-row'
		>
			<div id='hero-wc-container' className='w-fit h-fit'>
				<div
					id='hero-wc'
					style={{ height: width - 30, width: width }}
					className='flex justify-center items-center'
				>
					<SVG size={width} />
				</div>
			</div>

			<Divider className=' lg:hidden' />

			<div
				id='hero-card'
				className='font-serif font-semibold flex flex-col items-center text-xl gap-2 w-full justify-center'
			>
				<div className='flex flex-row gap-3 text-center items-center justify-center bg-neutral-300 rounded-xl p-4 w-full'>
					<BsFileEarmarkArrowUp size={45} />
					<h3 className='w-[20ch]'>Upload file (.pdf, .txt, .docx)</h3>
				</div>

				<VLine className='h-10 lg:h-4' />
				<div className='flex flex-row gap-3 text-center items-center justify-center bg-neutral-300 rounded-xl p-4 w-full'>
					<BsPencilSquare size={45} />
					<h3 className='w-[20ch]'>Generate cloud & make it your own</h3>
				</div>

				<VLine className='h-10 lg:h-4' />
				<div className='flex flex-row gap-3 text-center items-center justify-center bg-neutral-300 rounded-xl p-4 w-full'>
					<BsCloudDownload size={45} />
					<h3 className='w-[20ch]'>Download & share</h3>
				</div>
			</div>
		</div>
	);
};

export default Hero;
