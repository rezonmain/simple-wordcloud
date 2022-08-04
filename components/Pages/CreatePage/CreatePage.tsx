import { useDisclosure } from '@chakra-ui/react';
import {
	MutableRefObject,
	useEffect,
	useReducer,
	useRef,
	useState,
} from 'react';
import useMedia from '../../../lib/hooks/useMedia';
import OptionControls from '../../OptionControls/OptionControls';
import TextControls from '../../TextControls/TextControls';
import SideDrawer from '../../SideDrawer/SideDrawer';
import Toolbar from '../../Toolbar/Toolbar';
import WordCloudWidget from '../../WordCloudWidget/WordCloudWidget';
import { CloudContext } from '../../../lib/context/CloudContext';
import { demoClouds } from '../../../lib/data';
import cloudReducer from '../../../lib/cloudReducer';

// TODO: Fixed UB on wordlist table (might create own toggle component chakra acting wierd on build)

const CreatePage = () => {
	// Get initial cloud from initial props (replace demo here)
	const [cloud, dispatch] = useReducer(cloudReducer, demoClouds[0]);
	const [refresh, setRefresh] = useState(0);

	const drawerBtnRef = useRef() as MutableRefObject<HTMLDivElement>;
	const {
		isOpen: isDrawerOpen,
		onOpen: onDrawerOpen,
		onClose: onDrawerClose,
	} = useDisclosure();

	const lgMedia = useMedia('(min-width: 1024px)');

	const refreshCloud = () => {
		// Updating refresh state regenerates the wordcloud with updated state
		setRefresh((prev) => prev + 1);
	};

	// Close drawer when lgMedia is true
	useEffect(() => {
		lgMedia && onDrawerClose();
	}, [lgMedia, onDrawerClose]);

	return (
		<CloudContext.Provider value={{ cloud: cloud, dispatch: dispatch }}>
			<Toolbar btnRef={drawerBtnRef} onOpen={onDrawerOpen} />
			<SideDrawer isOpen={isDrawerOpen} onClose={onDrawerClose} />
			<main className='w-[97vw] mx-auto my-3 flex flex-col justify-center gap-3 min-w-[330px] max-w-[510px] lg:max-w-[960px] lg:w-full'>
				<div className='flex flex-col gap-3 lg:flex-row '>
					<TextControls />
					<OptionControls onRefresh={refreshCloud} />
				</div>
				<WordCloudWidget refresh={refresh} />
			</main>
		</CloudContext.Provider>
	);
};

export default CreatePage;
