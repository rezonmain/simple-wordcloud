import { useDisclosure } from '@chakra-ui/react';
import { MutableRefObject, useEffect, useReducer, useRef } from 'react';
import useMedia from '../../../lib/hooks/useMedia';
import OptionControls from '../../OptionControls/OptionControls';
import TextControls from '../../TextControls/TextControls';
import SideDrawer from '../../SideDrawer/SideDrawer';
import Toolbar from '../../Toolbar/Toolbar';
import WordCloudWidget from '../../WordCloudWidget/WordCloudWidget';
import { CloudContext } from '../../../lib/context/CloudContext';
import cloudReducer from '../../../lib/reducer';
import demo from '../../../lib/data';

const CreatePage = () => {
	const btnRef = useRef() as MutableRefObject<HTMLDivElement>;
	const { isOpen, onOpen, onClose } = useDisclosure();
	const lgMedia = useMedia('(min-width: 1024px)');

	// Get initial cloud from initial props (replace demo here)
	const [cloud, dispatch] = useReducer(cloudReducer, demo[0]);

	// Refresh cloud
	const refreshCloud = () => {};

	console.log(cloud);

	// Close drawer when lgMedia is true
	useEffect(() => {
		lgMedia && onClose();
	}, [lgMedia, onClose]);
	return (
		<CloudContext.Provider value={{ cloud: cloud, dispatch: dispatch }}>
			<Toolbar btnRef={btnRef} onOpen={onOpen} />
			<SideDrawer isOpen={isOpen} onClose={onClose} />
			<main className='w-[97vw] mx-auto my-3 flex flex-col justify-center gap-3 min-w-[330px] max-w-[510px] lg:max-w-[960px] lg:w-full'>
				<div className='flex flex-col lg:flex-row gap-3'>
					<TextControls />
					<OptionControls onRefresh={refreshCloud} />
				</div>
				<WordCloudWidget />
			</main>
		</CloudContext.Provider>
	);
};

export default CreatePage;
