import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
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
			<ModalContent fontFamily={'Maitree'}>
				<ModalHeader>Cloud Word List</ModalHeader>
				<ModalCloseButton />
				<ModalBody maxH={'45vh'}>
					<WordList />
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default WordListModal;
