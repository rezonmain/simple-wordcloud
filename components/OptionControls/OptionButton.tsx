const OptionButton = ({
	text,
	onClick,
}: {
	text: string;
	onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) => {
	return (
		<button
			className='font-serif control-base bg-neutral-100 rounded-md p-2 border border-neutral-400 whitespace-nowrap active:border-neutral-800'
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default OptionButton;
