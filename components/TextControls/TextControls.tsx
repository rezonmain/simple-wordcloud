import { Textarea } from '@chakra-ui/react';
import { ChangeEvent } from 'react';
import { useCloudContext } from '../../lib/context/CloudContext';
import Button from '../Button/Button';
import FileDropper from '../FileDropper/FileDropper';
import OptionButton from '../OptionControls/OptionButton';
import Switch from '../Switch/Switch';

const TextControls = ({ onFile }: { onFile: (f: Blob) => void }) => {
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
					<FileDropper onFile={onFile} />
				) : (
					<div className='flex flex-col gap-2'>
						<Textarea
							fontFamily={'Maitree'}
							height={180}
							bgColor={'#f5f5f5'}
							resize={'vertical'}
							maxHeight={300}
							value={textAreaValue}
							onChange={onTextAreaChange}
						></Textarea>
						<div className='self-end'>
							<OptionButton
								text='Clear'
								onClick={() =>
									dispatch({ type: 'updateTextArea', payload: '' })
								}
								highlight={true}
							/>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default TextControls;
