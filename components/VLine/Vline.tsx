const VLine = ({ className }: { className: string }) => {
	return (
		<span
			className={'block rounded-lg w-[5px] bg-neutral-800' + ' ' + className}
		></span>
	);
};

export default VLine;
