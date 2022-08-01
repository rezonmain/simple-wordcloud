import { Select } from '@chakra-ui/react';
import { ChangeEvent } from 'react';
import { useCloudContext } from '../../lib/context/CloudContext';

const OptionSelect = () => {
	const {
		cloud: {
			layout: { font },
		},
		dispatch,
	} = useCloudContext();

	const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
		dispatch({ type: 'changeFont', payload: e.target.value });
	};
	return (
		<div id='select-container' className='bg-neutral-100 rounded-md h-fit'>
			<Select
				size={'lg'}
				fontFamily={'Maitree'}
				fontSize={'1rem'}
				variant={'filled'}
				bg='#f5f5f5'
				borderColor={'#a3a3a3'}
				border={'1px'}
				focusBorderColor={'#262626'}
				onChange={onChange}
				value={font}
			>
				<option value='Helvetica'>Helvetica</option>
				<option value='Impact'>Impact</option>
			</Select>
		</div>
	);
};

export default OptionSelect;
