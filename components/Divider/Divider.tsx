const Divider = ({ className }: { className?: string }) => {
	return (
		<div className={'flex flex-col gap-0.5 w-full' + ' ' + className}>
			<span className='block h-[1px] bg-neutral-800'></span>
			<span className='block h-[5px] bg-neutral-800'></span>
		</div>
	);
};

export default Divider;
