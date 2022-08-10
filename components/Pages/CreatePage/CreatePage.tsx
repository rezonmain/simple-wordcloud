import { useDisclosure } from '@chakra-ui/react';
import {
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
import cloudReducer from '../../../lib/cloudReducer';
import { Cloud } from '../../../lib/types';
import TextParser from '../../../lib/classes/TextParser';

const CreatePage = ({ initialCloud }: { initialCloud: Cloud }) => {
	// TODO: generate cloud from text area
	const [cloud, dispatch] = useReducer(cloudReducer, initialCloud);
	const text = cloud.textAreaValue;
	const [refresh, setRefresh] = useState(0);
	const lgMedia = useMedia('(min-width: 1024px)');
	const drawerBtnRef = useRef() as MutableRefObject<HTMLDivElement>;
	const {
		isOpen: isDrawerOpen,
		onOpen: onDrawerOpen,
		onClose: onDrawerClose,
	} = useDisclosure();

	const onApply = () => {
		// Updating refresh state regenerates the wordcloud with updated state
		setRefresh((prev) => prev + 1);
	};

	const onFile = async (f: Blob) => {
		const tp = new TextParser();
		const wordArray = await tp.getWordArrayFromFile(f);
		dispatch({ type: 'updateWordArray', payload: wordArray });
		setRefresh((prev) => prev + 1);
	};

	// Update word list when textarea changes
	useEffect(() => {
		// If source is text
		if (!cloud.source) {
			const tp = new TextParser();
			const wordArray = tp.getWordArrayFromText(text);
			dispatch({ type: 'updateWordArray', payload: wordArray });
		}
	}, [text, cloud.source]);

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
					<TextControls onFile={onFile} />
					<OptionControls onRefresh={onApply} />
				</div>
				{cloud.wordArray.length > 0 ? (
					<WordCloudWidget refresh={refresh} />
				) : null}
			</main>
		</CloudContext.Provider>
	);
};

export default CreatePage;
