import { useDisclosure } from '@chakra-ui/react';
import { BsGear } from 'react-icons/bs';
import { useCloudContext } from '../../lib/context/CloudContext';
import ReusableModal from '../ReusableModal/ReusableModal';
import WordList from '../WordList/WordList';
import WordRotation from '../WordRotation/WordRotation';
import OptionButton from './OptionButton';
import OptionSelect from './OptionSelect';
import OptionSlider from './OptionsSlider';

const OptionControls = ({ onRefresh }: { onRefresh: () => void }) => {
	const { dispatch } = useCloudContext();
	const {
		isOpen: isListOpen,
		onOpen: onListOpen,
		onClose: onListClose,
	} = useDisclosure();

	const {
		isOpen: isRotationOpen,
		onOpen: onRotationOpen,
		onClose: onRotationClose,
	} = useDisclosure();

	const handleOption = (e: React.MouseEvent, option: string) => {
		e.preventDefault();
		switch (option) {
			case 'reset':
				dispatch({ type: 'resetLayout' });
				break;
			case 'refresh':
				onRefresh();
				break;
			case 'wordlist':
				onListOpen();
				break;
			case 'rotation':
				onRotationOpen();
				break;
		}
	};
	return (
		<section className='flex flex-col w-full'>
			<div
				id='section-title'
				className='flex flex-row gap-2 font-serif text-xl bg-neutral-300 items-center p-3 w-fit'
			>
				<BsGear />
				<span className='font-semibold'>Options</span>
			</div>
			<form>
				<div
					id='section-controls'
					className='bg-neutral-300 h-fit p-4 flex flex-col gap-6'
				>
					<div
						id='top-controls-container'
						className='flex flex-row gap-1 justify-start'
					>
						<OptionButton
							text='Edit Wordlist'
							onClick={(e) => handleOption(e, 'wordlist')}
						/>
						<OptionButton
							text='Word Rotation'
							onClick={(e) => handleOption(e, 'rotation')}
						/>
						<OptionSelect />
					</div>
					<OptionSlider />
					<div
						id='bottom-controls-container'
						className='flex flex-row justify-end gap-2'
					>
						<input
							onClick={(e) => handleOption(e, 'reset')}
							value='Reset settings'
							type='reset'
							className='control-base bg-neutral-100 border border-neutral-400 font-serif p-2 rounded-md active:border-neutral-800'
						/>
						<OptionButton
							text='Apply settings'
							onClick={(e) => handleOption(e, 'refresh')}
							highlight={true}
						/>
					</div>
				</div>
			</form>
			<ReusableModal
				title='Word Cloud List'
				isOpen={isListOpen}
				onClose={onListClose}
			>
				<WordList />
			</ReusableModal>
			<ReusableModal
				title='Word Rotation'
				isOpen={isRotationOpen}
				onClose={onRotationClose}
			>
				<WordRotation />
			</ReusableModal>
		</section>
	);
};

export default OptionControls;
