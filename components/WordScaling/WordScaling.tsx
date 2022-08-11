import Image from 'next/image';
import { useCloudContext } from '../../lib/context/CloudContext';
import RadioCard from '../RadioCard/RadioCard';

const WordScaling = () => {
	const {
		cloud: {
			layout: { scaling },
		},
		dispatch,
	} = useCloudContext();

	const onClick = (scaling: string | number) => {
		dispatch({ type: 'changeScaling', payload: scaling });
	};
	const imgSize = 200;
	return (
		<section className='flex flex-row p-1 gap-4 mx-auto w-fit'>
			<RadioCard
				title='Linear'
				value='linear'
				currentValue={scaling}
				onClick={onClick}
			>
				<Image
					width={imgSize}
					height={imgSize}
					src={'/linear.svg'}
					alt='use linear scaling'
				/>
			</RadioCard>
			<RadioCard
				title='Logaritmic'
				value='log'
				currentValue={scaling}
				onClick={onClick}
			>
				<Image
					width={imgSize}
					height={imgSize}
					src={'/log.svg'}
					alt='use log scaling'
				/>
			</RadioCard>
		</section>
	);
};

export default WordScaling;
