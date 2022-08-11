import EditableTitle from '../EditableTitle/EditableTitle';
import { IoMenuSharp } from 'react-icons/io5';
import { MutableRefObject } from 'react';
import MenuBar from '../MenuBar/MenuBar';
import Link from 'next/link';
import MyDivider from '../Divider/Divider';

const Toolbar = ({
	btnRef,
	onOpen,
}: {
	btnRef: MutableRefObject<HTMLDivElement>;
	onOpen: () => void;
}) => {
	return (
		<header className='sticky top-0 z-10 font-serif bg-neutral-800 text-neutral-100 flex flex-row justify-between items-center h-14 px-4 gap-2'>
			<div className='hidden flex-row gap-6 lg:flex'>
				<Link href={'/'}>
					<a className=' ml-6'>
						<span className='block text-neutral-100 text-xl'>SWC</span>
						<MyDivider color='bg-neutral-100' />
					</a>
				</Link>
				<MenuBar as='toolbar' />
			</div>
			<div
				onClick={onOpen}
				ref={btnRef}
				id='burger-button'
				className='control-base py-1 px-2 bg-neutral-700 rounded-lg active:brightness-75 lg:hidden'
			>
				<IoMenuSharp size={'24px'} />
			</div>
			<div className='w-fit'>
				<EditableTitle />
			</div>
			<div id='dummy-flex-2' className='w-[2.5rem] lg:w-[26.625rem]'></div>
		</header>
	);
};

export default Toolbar;
