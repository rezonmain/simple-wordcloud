import { Textarea } from '@chakra-ui/react';
import { useState } from 'react';
import FileDropper from '../FileDropper/FileDropper';
import Switch from '../Switch/Switch';

const TextControls = () => {
	const [textOrFile, setTextOrFile] = useState(false);
	return (
		<section className='flex flex-col gap-1'>
			<div className='flex flex-row gap-2 font-serif text-xl bg-neutral-300 items-center p-2 w-fit'>
				<span>Text</span>
				<Switch
					value={textOrFile}
					onClick={() => setTextOrFile((prev) => !prev)}
				/>
				<span>File</span>
			</div>
			<div className='h-[200px] bg-neutral-300 p-3'>
				{textOrFile ? (
					<FileDropper onFile={() => {}} />
				) : (
					<Textarea height={'100%'} bgColor={'#f5f5f5'}></Textarea>
				)}
			</div>
		</section>
	);
};

export default TextControls;
