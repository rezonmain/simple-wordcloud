import { useDisclosure } from '@chakra-ui/react';
import {
	ChangeEvent,
	MutableRefObject,
	useEffect,
	useMemo,
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
import TextParser from '../../../lib/classes/TextParser';

const CreatePage = () => {
	// Get initial cloud from initial props (replace demo here)
	const [cloud, dispatch] = useReducer(cloudReducer, demoClouds[0]);
	const [refresh, setRefresh] = useState(0);
	const text = cloud.textAreaValue;

	const drawerBtnRef = useRef() as MutableRefObject<HTMLDivElement>;
	const {
		isOpen: isDrawerOpen,
		onOpen: onDrawerOpen,
		onClose: onDrawerClose,
	} = useDisclosure();

	const lgMedia = useMedia('(min-width: 1024px)');

	const onApply = () => {
		// Calculate wordArray if text is select as source
		if (!cloud.source) {
			const tp = new TextParser();
			const wordArray = tp.getWordArrayFromText(text);
			dispatch({ type: 'updateWordArray', payload: wordArray });
		}
		// Updating refresh state regenerates the wordcloud with updated state
		setRefresh((prev) => prev + 1);
	};

	// Close drawer when lgMedia is true
	useEffect(() => {
		lgMedia && onDrawerClose();
	}, [lgMedia, onDrawerClose]);

	console.log(cloud);

	return (
		<CloudContext.Provider value={{ cloud: cloud, dispatch: dispatch }}>
			<Toolbar btnRef={drawerBtnRef} onOpen={onDrawerOpen} />
			<SideDrawer isOpen={isDrawerOpen} onClose={onDrawerClose} />
			<main className='w-[97vw] mx-auto my-3 flex flex-col justify-center gap-3 min-w-[330px] max-w-[510px] lg:max-w-[960px] lg:w-full'>
				<div className='flex flex-col gap-3 lg:flex-row '>
					<TextControls />
					<OptionControls onRefresh={onApply} />
				</div>
				<WordCloudWidget refresh={refresh} />
			</main>
		</CloudContext.Provider>
	);
};

export default CreatePage;
