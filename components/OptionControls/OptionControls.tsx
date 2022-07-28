import { BsGear } from 'react-icons/bs';
import OptionButton from './OptionButton';
import OptionSelect from './OptionSelect';
import OptionSlider from './OptionsSlider';
const OptionControls = () => {
	return (
		<section className='flex flex-col'>
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
						<OptionButton text='Edit Wordlist' onClick={() => {}} />
						<OptionButton text='Word Rotation' onClick={() => {}} />
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
						<OptionButton text='Generate Cloud' onClick={() => {}} />
					</div>
				</div>
			</form>
		</section>
	);
};

export default OptionControls;
