import Image from 'next/image';
import RotationCard from './RotationCard';

const WordRotation = () => {
	const imgSize = 200;
	return (
		<section className='flex flex-row p-4 gap-4 mx-auto w-fit'>
			<RotationCard title='No rotation' value='none'>
				<Image width={imgSize} height={imgSize} src={'/norotation.svg'} />
			</RotationCard>
			<RotationCard title='Righ angles' value='right'>
				<Image width={imgSize} height={imgSize} src={'/rightangle.svg'} />
			</RotationCard>
			<RotationCard title='Random angles' value='random'>
				<Image width={imgSize} height={imgSize} src={'/random.svg'} />
			</RotationCard>
		</section>
	);
};

export default WordRotation;
