import Image from 'next/image';
import { useCloudContext } from '../../lib/context/CloudContext';
import RadioCard from '../RadioCard/RadioCard';

const WordSpacing = () => {
	const {
		cloud: {
			layout: { padding },
		},
		dispatch,
	} = useCloudContext();

	const onClick = (padding: string | number) => {
		dispatch({ type: 'changePadding', payload: padding });
	};
	const imgSize = 200;
	return (
		<section className='flex flex-row p-1 gap-4 mx-auto w-fit'>
			<RadioCard
				title='Defualt spacing'
				value={1}
				currentValue={padding}
				onClick={onClick}
			>
				<Image
					width={imgSize}
					height={imgSize}
					src={'/nospacing.svg'}
					alt='default spacing'
				/>
			</RadioCard>
			<RadioCard
				title='Medium'
				value={5}
				currentValue={padding}
				onClick={onClick}
			>
				<Image
					width={imgSize}
					height={imgSize}
					src={'/medium.svg'}
					alt='medium spacing'
				/>
			</RadioCard>
			<RadioCard
				title='Large'
				value={10}
				currentValue={padding}
				onClick={onClick}
			>
				<Image
					width={imgSize}
					height={imgSize}
					src={'/large.svg'}
					alt='largespacing'
				/>
			</RadioCard>
		</section>
	);
};

export default WordSpacing;
