import { Select } from '@chakra-ui/react';

const OptionSelect = () => {
	return (
		<div id='select-container' className='bg-neutral-100 rounded-md h-fit'>
			<Select
				size={'lg'}
				fontFamily={'Maitree'}
				fontSize={'1rem'}
				placeholder='Font'
				variant={'filled'}
				bg='#f5f5f5'
				borderColor={'#a3a3a3'}
				border={'1px'}
				focusBorderColor={'#262626'}
			>
				<option value='Helvetica'>Helvetica</option>
				<option value='Impact'>Impact</option>
			</Select>
		</div>
	);
};

export default OptionSelect;
