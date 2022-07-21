import { motion } from 'framer-motion';
import { useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import WordControls from './WordControls';

const Controls = () => {
	const [show, setShow] = useState(false);

	return (
		<div id='controls-container' className='border'>
			<div
				id='showControls-container'
				onClick={() => setShow((prev) => !prev)}
				className='flex flex-row items-center gap-2 cursor-pointer'
			>
				<p>{show ? 'Hide' : 'Show'} options</p>
				<motion.div
					id='arrow-container'
					className='w-fit h-fit'
					animate={show ? 'show' : 'hide'}
					variants={{
						hide: { rotate: 0 },
						show: { rotate: -180 },
					}}
				>
					<RiArrowDownSLine></RiArrowDownSLine>
				</motion.div>
			</div>
			<motion.div
				className='overflow-hidden'
				animate={show ? 'show' : 'hide'}
				variants={{ hide: { height: '0px' }, show: { height: '100%' } }}
			>
				<WordControls />
			</motion.div>
		</div>
	);
};

export default Controls;
