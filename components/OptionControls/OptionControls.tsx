import { BsGear } from 'react-icons/bs';
import OptionButton from './OptionButton';
import OptionSelect from './OptionSelect';
import OptionSlider from './OptionsSlider';

const OptionControls = ({ onRefresh }: { onRefresh: () => void }) => {
	const handleOption = (e: React.MouseEvent, option: string) => {
		e.preventDefault();
		switch (option) {
			case 'refresh':
				onRefresh();
				return;
		}
	};
	return (
		<section className='flex flex-col w-full'>
			<div
				id='section-title'
				className='flex flex-row gap-2 font-serif text-xl bg-neutral-300 items-center p-3 w-fit'
			>
				<BsGear />
				<span className='font-semibold'>Options</span>
			</div>
			<form>
				<div
					id='section-controls'
					className='bg-neutral-300 h-fit p-4 flex flex-col gap-6'
				>
					<div
						id='top-controls-container'
						className='flex flex-row gap-1 justify-start'
					>
						<OptionButton
							text='Edit Wordlist'
							onClick={(e) => handleOption(e, 'wordlist')}
						/>
						<OptionButton
							text='Word Rotation'
							onClick={(e) => handleOption(e, 'rotation')}
						/>
						<OptionSelect />
					</div>
					<OptionSlider />
					<div
						id='bottom-controls-container'
						className='flex flex-row justify-end gap-2'
					>
						<input
							type='reset'
							className='control-base bg-neutral-100 border border-neutral-400 font-serif p-2 rounded-md active:'
						/>
						<OptionButton
							text='Generate Cloud'
							onClick={(e) => handleOption(e, 'refresh')}
						/>
					</div>
				</div>
			</form>
		</section>
	);
};

export default OptionControls;
