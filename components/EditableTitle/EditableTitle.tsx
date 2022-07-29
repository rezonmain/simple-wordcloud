import {
	Editable,
	EditablePreview,
	Input,
	EditableInput,
	Flex,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useCloudContext } from '../../lib/context/CloudContext';
import EditableControls from './EditableControls';

const EditableTitle = () => {
	// Get initial title from useContext, also get dispatch
	const {
		cloud: { title },
		dispatch,
	} = useCloudContext();
	const [newTitle, setNewTitle] = useState(title);

	const onSubmit = () => {
		dispatch({ type: 'updateTitle', payload: newTitle });
	};
	return (
		<Editable
			textAlign='center'
			fontSize='xl'
			isPreviewFocusable={false}
			defaultValue={newTitle}
		>
			<Flex alignItems={'center'} gap={'0.5rem'}>
				<EditablePreview />
				<Input
					as={EditableInput}
					fontSize={18}
					size={'md'}
					onChange={(e) => setNewTitle(e.target.value)}
					value={newTitle}
					focusBorderColor={'#f5f5f5'}
				/>
				<EditableControls onSubmit={onSubmit} />
			</Flex>
		</Editable>
	);
};

export default EditableTitle;
