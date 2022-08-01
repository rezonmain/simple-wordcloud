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

const ReusableModal = ({
	title,
	isOpen,
	onClose,
	children,
}: {
	title: string;
	isOpen: boolean;
	onClose: () => void;
	children: JSX.Element;
}) => {
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			isCentered
			scrollBehavior='inside'
			size={'2xl'}
		>
			<ModalOverlay />
			<ModalContent fontFamily={'Maitree'} rounded='md'>
				<ModalHeader>{title}</ModalHeader>
				<ModalCloseButton />
				<ModalBody maxH={'45vh'}>{children}</ModalBody>
				<ModalFooter>
					<Button colorScheme='blue' mr={3} onClick={onClose}>
						Close
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default ReusableModal;
