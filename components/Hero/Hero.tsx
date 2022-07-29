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
import Step from './Step';
const Hero = () => {
	const [ref, { width }] = useMeasure();
	const stepIconSize = 40;
	return (
		<div
			ref={ref as LegacyRef<HTMLDivElement>}
			id='hero'
			className='flex flex-col gap-8 justify-center items-center w-full lg:flex-row'
		>
			<div id='hero-wc-container' className='w-fit h-fit select-none'>
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
				id='hero-steps'
				className='font-serif font-semibold flex flex-col items-center text-xl gap-2 w-full justify-center'
			>
				<Step
					text='Upload file (.pdf, .txt, .docx)'
					icon={<BsFileEarmarkArrowUp size={stepIconSize} />}
				/>
				<VLine className='h-6 lg:h-4' />
				<Step
					text='Generate cloud & make it your own'
					icon={<BsPencilSquare size={stepIconSize} />}
				/>
				<VLine className='h-6 lg:h-4' />
				<Step
					text='Download & share'
					icon={<BsCloudDownload size={stepIconSize} />}
				/>
			</div>
		</div>
	);
};

export default Hero;
