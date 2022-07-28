import { motion } from 'framer-motion';

const Switch = ({
	value,
	onClick,
}: {
	value: boolean;
	onClick: () => void;
}) => {
	return (
		<div>
			<span
				onClick={onClick}
				className='control-base bg-neutral-800 rounded-2xl h-6 w-11 flex flex-row items-center px-[0.2rem]'
			>
				<motion.span
					animate={value ? 'right' : 'left'}
					variants={{ right: { x: '1.12rem' } }}
					transition={{ type: 'spring', stiffness: 2000, damping: 100 }}
					className='block bg-neutral-300 h-5 w-5 rounded-full'
				></motion.span>
			</span>
		</div>
	);
};

export default Switch;
