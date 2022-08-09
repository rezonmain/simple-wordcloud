import { Textarea } from '@chakra-ui/react';
import { ChangeEvent } from 'react';
import { useCloudContext } from '../../lib/context/CloudContext';
import FileDropper from '../FileDropper/FileDropper';
import Switch from '../Switch/Switch';

const TextControls = () => {
	const {
		cloud: { source, textAreaValue },
		dispatch,
	} = useCloudContext();

	const toggleSource = () => {
		dispatch({ type: 'toggleSource' });
	};

	const onTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		dispatch({ type: 'updateTextArea', payload: e.target.value });
	};

	return (
		<section className='flex flex-col w-full'>
			<div className='flex flex-row gap-2 font-serif text-xl bg-neutral-300 items-center p-3 w-fit'>
				<span>Text</span>
				<Switch value={source} onClick={toggleSource} />
				<span>File</span>
			</div>
			<div className='bg-neutral-300 p-3'>
				{source ? (
					<FileDropper onFile={() => {}} />
				) : (
					<Textarea
						fontFamily={'Maitree'}
						height={180}
						bgColor={'#f5f5f5'}
						resize={'vertical'}
						maxHeight={300}
						value={textAreaValue}
						onChange={onTextAreaChange}
					></Textarea>
				)}
			</div>
		</section>
	);
};

export default TextControls;
