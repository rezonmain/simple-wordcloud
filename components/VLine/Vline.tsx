const VLine = ({ height }: { height: number }) => {
	return (
		<span
			style={{ height }}
			className='block rounded-lg w-[5px] bg-neutral-800'
		></span>
	);
};

export default VLine;
