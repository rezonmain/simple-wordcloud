import { useDisclosure } from '@chakra-ui/react';
import { MutableRefObject, useRef } from 'react';
import OptionControls from '../../OptionControls/OptionControls';
import SideBar from '../../SideBar/SideBar';
import TextControls from '../../TextControls/TextControls';
import Toolbar from '../../Toolbar/Toolbar';

const CreatePage = () => {
	const btnRef = useRef() as MutableRefObject<HTMLDivElement>;
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Toolbar btnRef={btnRef} onOpen={onOpen} title={'untitled-1'} />
			<SideBar isOpen={isOpen} onClose={onClose} />
			<main className='w-[97vw] mx-auto my-3 flex flex-col justify-center  gap-3 min-w-[330px] max-w-[510px] xl:flex-row xl:max-w-[880px] xl:w-full'>
				<TextControls />
				<OptionControls />
			</main>
		</>
	);
};

export default CreatePage;
