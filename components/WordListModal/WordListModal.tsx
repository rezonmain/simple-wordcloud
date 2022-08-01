import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
} from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import { useCloudContext } from '../../lib/context/CloudContext';
import WordList from './WordList';
import WordListRow from './WordListRow';

const WordListModal = ({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}) => {
	const {
		cloud: { wordArray },
		dispatch,
	} = useCloudContext();

	// Get initial state from context
	const [localWordArray, setLocalWordArray] = useState(wordArray);

	// On checkbox toggle handle local state change only
	const onChange = (e: ChangeEvent<HTMLInputElement>, word: string) => {
		const state = e.target.checked;
		setLocalWordArray((prev) => {
			const newArray = structuredClone(prev);
			const index = newArray.findIndex((el) => el.text === word);
			newArray[index].enabled = state;
			return newArray;
		});
	};

	// On modal close update global state
	const handleClose = () => {
		dispatch({ type: 'toggleWord', payload: localWordArray });
		onClose();
	};

	const rows = localWordArray.map((word, index) => (
		<WordListRow
			key={word.text}
			index={index + 1}
			word={word.text}
			value={word.size}
			enabled={word.enabled}
			onChange={onChange}
		/>
	));
	return (
		<Modal
			isOpen={isOpen}
			onClose={handleClose}
			isCentered
			scrollBehavior='inside'
		>
			<ModalOverlay />
			<ModalContent fontFamily={'Maitree'} rounded='md'>
				<ModalHeader>Cloud Word List</ModalHeader>
				<ModalCloseButton />
				<ModalBody maxH={'45vh'}>
					<WordList>{rows}</WordList>
				</ModalBody>
				<ModalFooter>
					<Button colorScheme='blue' mr={3} onClick={handleClose}>
						Close
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default WordListModal;
