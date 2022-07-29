import { useDisclosure } from '@chakra-ui/react';
import { MutableRefObject, useEffect, useRef } from 'react';
import useMedia from '../../../lib/hooks/useMedia';
import OptionControls from '../../OptionControls/OptionControls';
import SideBar from '../../SideBar/SideBar';
import TextControls from '../../TextControls/TextControls';
import Toolbar from '../../Toolbar/Toolbar';
import WordCloudWidget from '../../WordCloudWidget/WordCloudWidget';

const CreatePage = () => {
	const btnRef = useRef() as MutableRefObject<HTMLDivElement>;
	const { isOpen, onOpen, onClose } = useDisclosure();
	const lgMedia = useMedia('(min-width: 1024px)');

	// Close drawer when lgMedia is true
	useEffect(() => {
		lgMedia && onClose();
	}, [lgMedia]);

	return (
		<>
			<Toolbar btnRef={btnRef} onOpen={onOpen} title={'untitled-1'} />
			<SideBar isOpen={isOpen} onClose={onClose} />
			<main className='w-[97vw] mx-auto my-3 flex flex-col justify-center gap-3 min-w-[330px] max-w-[510px] lg:max-w-[960px] lg:w-full'>
				<div className='flex flex-col lg:flex-row gap-3'>
					<TextControls />
					<OptionControls />
				</div>
				<WordCloudWidget />
			</main>
		</>
	);
};

export default CreatePage;
