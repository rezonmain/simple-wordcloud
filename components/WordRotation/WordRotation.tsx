import Image from 'next/image';
import { useCloudContext } from '../../lib/context/CloudContext';
import RadioCard from '../RadioCard/RadioCard';

const WordRotation = () => {
	const {
		cloud: {
			layout: { rotation },
		},
		dispatch,
	} = useCloudContext();

	const onClick = (rotation: string) => {
		dispatch({ type: 'changeRotation', payload: rotation });
	};
	const imgSize = 200;
	return (
		<section className='flex flex-row p-1 gap-4 mx-auto w-fit'>
			<RadioCard
				title='No rotation'
				value='none'
				currentValue={rotation}
				onClick={onClick}
			>
				<Image
					width={imgSize}
					height={imgSize}
					src={'/norotation.svg'}
					alt='no rotation'
				/>
			</RadioCard>
			<RadioCard
				title='Righ angles'
				value='right'
				currentValue={rotation}
				onClick={onClick}
			>
				<Image
					width={imgSize}
					height={imgSize}
					src={'/rightangle.svg'}
					alt='right angles'
				/>
			</RadioCard>
			<RadioCard
				title='Random'
				value='random'
				currentValue={rotation}
				onClick={onClick}
			>
				<Image
					width={imgSize}
					height={imgSize}
					src={'/random.svg'}
					alt='random angles'
				/>
			</RadioCard>
		</section>
	);
};

export default WordRotation;
