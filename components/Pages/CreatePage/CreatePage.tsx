import { useState } from 'react';
import OptionControls from '../../OptionControls/OptionControls';
import TextControls from '../../TextControls/TextControls';
import Toolbar from '../../Toolbar/Toolbar';

const CreatePage = () => {
	return (
		<>
			<Toolbar title={'untitled-1'} />
			<main className='w-[97vw] mx-auto my-3 flex flex-col gap-2'>
				<TextControls />
				<OptionControls />
			</main>
		</>
	);
};

export default CreatePage;
