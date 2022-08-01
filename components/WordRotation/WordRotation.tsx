import Image from 'next/image';
import { useCloudContext } from '../../lib/context/CloudContext';
import { Rotation } from '../../lib/types';
import RotationCard from './RotationCard';

const WordRotation = () => {
	const {
		cloud: {
			layout: { rotation },
		},
		dispatch,
	} = useCloudContext();

	const onClick = (rotation: Rotation) => {
		dispatch({ type: 'changeRotation', payload: rotation });
	};
	const imgSize = 200;
	return (
		<section className='flex flex-row p-1 gap-4 mx-auto w-fit'>
			<RotationCard
				title='No rotation'
				value='none'
				rotation={rotation}
				onClick={onClick}
			>
				<Image width={imgSize} height={imgSize} src={'/norotation.svg'} />
			</RotationCard>
			<RotationCard
				title='Righ angles'
				value='right'
				rotation={rotation}
				onClick={onClick}
			>
				<Image width={imgSize} height={imgSize} src={'/rightangle.svg'} />
			</RotationCard>
			<RotationCard
				title='Random'
				value='random'
				rotation={rotation}
				onClick={onClick}
			>
				<Image width={imgSize} height={imgSize} src={'/random.svg'} />
			</RotationCard>
		</section>
	);
};

export default WordRotation;
