import EditableTitle from '../EditableTitle/EditableTitle';
import { IoMenuSharp } from 'react-icons/io5';
import { MutableRefObject } from 'react';

const Toolbar = ({
	title,
	btnRef,
	onOpen,
}: {
	title: string;
	btnRef: MutableRefObject<HTMLDivElement>;
	onOpen: () => void;
}) => {
	return (
		<header className='font-serif bg-neutral-800 text-neutral-100 flex flex-row justify-between items-center h-14 px-4 gap-2'>
			<div
				onClick={onOpen}
				ref={btnRef}
				id='burger-button'
				className='control-base py-1 px-2 bg-neutral-700 rounded-lg active:brightness-75'
			>
				<IoMenuSharp size={'1.50rem'} />
			</div>
			<div className='w-fit'>
				<EditableTitle title={title} />
			</div>
			<div id='dummy-flex' className='w-[2.5rem]'></div>
		</header>
	);
};

export default Toolbar;
