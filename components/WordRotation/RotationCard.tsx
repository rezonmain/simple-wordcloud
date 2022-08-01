import { Box } from '@chakra-ui/react';
const RotationCard = ({
	children,
	title,
}: {
	children: JSX.Element;
	title: string;
}) => {
	return (
		<div className='rounded-lg w-fit font-serif cursor-pointer hover:scale-[1.03] active:scale-[1.03] transition-transform'>
			<h3>{title}</h3>
			<div className='border border-neutral-300 shadow-sm rounded-lg'>
				{children}
			</div>
		</div>
	);
};

export default RotationCard;
