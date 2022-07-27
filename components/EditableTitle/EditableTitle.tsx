import {
	Editable,
	EditablePreview,
	Input,
	EditableInput,
	Flex,
} from '@chakra-ui/react';
import EditableControls from './EditableControls';

const EditableTitle = ({ title }: { title: string }) => {
	return (
		<Editable
			textAlign='center'
			defaultValue={title}
			fontSize='xl'
			isPreviewFocusable={false}
		>
			<Flex alignItems={'center'} gap={'0.5rem'}>
				<EditablePreview />
				<Input
					as={EditableInput}
					fontSize={18}
					size={'md'}
					focusBorderColor={'#f5f5f5'}
				/>
				<EditableControls />
			</Flex>
		</Editable>
	);
};

export default EditableTitle;
