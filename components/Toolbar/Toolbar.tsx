import EditableTitle from '../EditableTitle/EditableTitle';
import { IoMenuSharp } from 'react-icons/io5';
import { MutableRefObject } from 'react';
import ToolbarMenu from './ToolbarMenu';

const Toolbar = ({
	btnRef,
	onOpen,
}: {
	btnRef: MutableRefObject<HTMLDivElement>;
	onOpen: () => void;
}) => {
	return (
		<header className='sticky top-0 z-10 font-serif bg-neutral-800 text-neutral-100 flex flex-row justify-between items-center h-14 px-4 gap-2'>
			<ToolbarMenu />
			<div
				onClick={onOpen}
				ref={btnRef}
				id='burger-button'
				className='control-base py-1 px-2 bg-neutral-700 rounded-lg active:brightness-75 lg:hidden'
			>
				<IoMenuSharp size={'1.50rem'} />
			</div>
			<div className='w-fit'>
				<EditableTitle />
			</div>
			<div id='dummy-flex-2' className='w-[2.5rem] lg:w-[26.625rem]'></div>
		</header>
	);
};

export default Toolbar;
