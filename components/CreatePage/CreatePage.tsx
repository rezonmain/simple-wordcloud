import { useState } from 'react';
import TextControls from '../TextControls/TextControls';
import Toolbar from '../Toolbar/Toolbar';

const CreatePage = () => {
	const [textOrFile, setTextOrFile] = useState(false);
	return (
		<>
			<Toolbar title={'untitled-1'} />
			<main className='w-[97vw] mx-auto my-3'>
				<TextControls />
				<div className='h-12'></div>
			</main>
		</>
	);
};

export default CreatePage;
