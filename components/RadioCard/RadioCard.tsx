const RadioCard = ({
	children,
	title,
	value,
	currentValue,
	description,
	onClick,
}: {
	children: JSX.Element;
	title: string;
	value: string | number;
	currentValue: string | number | undefined;
	description?: string;
	onClick: (value: string | number) => void;
}) => {
	const selected = {
		borderBottom: '3px solid #3182ce',
	};
	return (
		<div
			onClick={() => onClick(value)}
			style={value === currentValue ? selected : {}}
			className='rounded-sm p-1 w-fit font-serif cursor-pointer hover:scale-[1.03] active:scale-[1.03] transition-transform'
		>
			<h3>{title}</h3>
			<div className='border border-neutral-300 shadow-sm rounded-lg'>
				{children}
			</div>
			{description && <p>{description}</p>}
		</div>
	);
};

export default RadioCard;
