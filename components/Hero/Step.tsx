const Step = ({ text, icon }: { text: string; icon: JSX.Element }) => {
	return (
		<div className='bg-neutral-200 flex flex-row gap-3 text-center items-center justify-center rounded-3xl p-4 w-full'>
			{icon}
			<h3 className='w-[20ch]'>{text}</h3>
		</div>
	);
};

export default Step;
