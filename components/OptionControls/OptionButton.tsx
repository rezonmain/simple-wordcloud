const OptionButton = ({
	text,
	onClick,
	highlight,
}: {
	text: string;
	onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	highlight?: boolean;
}) => {
	return (
		<button
			className={`font-serif control-base rounded-md p-2 border border-neutral-400 whitespace-nowrap active:border-neutral-800 ${
				highlight
					? 'bg-neutral-800 text-neutral-100 font-semibold'
					: 'bg-neutral-100'
			}`}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default OptionButton;
