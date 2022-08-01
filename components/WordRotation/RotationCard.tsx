import { Rotation } from '../../lib/types';

const RotationCard = ({
	children,
	title,
	value,
	rotation,
	onClick,
}: {
	children: JSX.Element;
	title: string;
	value: Rotation;
	rotation: Rotation;
	onClick: (rotation: Rotation) => void;
}) => {
	const selected = {
		borderBottom: '3px solid #3182ce',
	};
	return (
		<div
			onClick={() => onClick(value)}
			style={value === rotation ? selected : {}}
			className='rounded-sm p-1 w-fit font-serif cursor-pointer hover:scale-[1.03] active:scale-[1.03] transition-transform'
		>
			<h3>{title}</h3>
			<div className='border border-neutral-300 shadow-sm rounded-lg'>
				{children}
			</div>
		</div>
	);
};

export default RotationCard;
