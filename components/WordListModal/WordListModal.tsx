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

import WordList from './WordList';

const WordListModal = ({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} isCentered scrollBehavior='inside'>
			<ModalOverlay />
			<ModalContent fontFamily={'Maitree'} rounded='md'>
				<ModalHeader>Cloud Word List</ModalHeader>
				<ModalCloseButton />
				<ModalBody maxH={'45vh'}>
					<WordList />
				</ModalBody>
				<ModalFooter>
					<Button colorScheme='blue' mr={3} onClick={onClose}>
						Close
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default WordListModal;
