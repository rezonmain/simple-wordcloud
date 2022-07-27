import {
	ButtonGroup,
	Flex,
	IconButton,
	useEditableControls,
} from '@chakra-ui/react';
import { BsPencilSquare, BsCheck, BsX } from 'react-icons/bs';

const EditableControls = () => {
	const {
		isEditing,
		getSubmitButtonProps,
		getCancelButtonProps,
		getEditButtonProps,
	} = useEditableControls();

	return isEditing ? (
		<ButtonGroup justifyContent='center' size={'s'}>
			<IconButton
				aria-label='confirm-editing'
				variant={'outline'}
				colorScheme='whiteAlpha'
				icon={<BsCheck size={30} />}
				{...getSubmitButtonProps()}
			/>
			<IconButton
				aria-label='cancel-editing'
				variant={'outline'}
				colorScheme='whiteAlpha'
				icon={<BsX size={30} />}
				{...getCancelButtonProps()}
			/>
		</ButtonGroup>
	) : (
		<IconButton
			aria-label='edit-title'
			variant={'unstyled'}
			icon={<BsPencilSquare size={20} />}
			size={'xs'}
			{...getEditButtonProps()}
		/>
	);
};

export default EditableControls;
