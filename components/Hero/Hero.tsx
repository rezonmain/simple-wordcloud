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
			className='flex flex-col gap-3 justify-center items-center w-full'
		>
			<div
				id='wordcloud-title'
				style={{ height: width - 30 }}
				className='flex justify-center items-center'
			>
				<SVG size={width} />
			</div>
			<Divider />

			<div
				id='hero-card'
				className='font-serif font-semibold flex flex-col items-center text-xl py-6 gap-2 w-full justify-center'
			>
				<div className='flex flex-row gap-10 text-center items-center bg-neutral-300 rounded-xl p-4 w-full'>
					<BsFileEarmarkArrowUp size={60} />
					<h3 className='w-[20ch]'>Upload file (.pdf, .txt, .docx)</h3>
				</div>

				<VLine height={40} />
				<div className='flex flex-row gap-10 text-center items-center bg-neutral-300 rounded-xl p-4 w-full'>
					<BsPencilSquare size={60} />
					<h3 className='w-[20ch]'>Generate cloud & make it your own</h3>
				</div>

				<VLine height={40} />
				<div className='flex flex-row gap-10 text-center items-center bg-neutral-300 rounded-xl p-4 w-full'>
					<BsCloudDownload size={60} />
					<h3 className='w-[20ch]'>Download & share</h3>
				</div>
			</div>
		</div>
	);
};

export default Hero;
