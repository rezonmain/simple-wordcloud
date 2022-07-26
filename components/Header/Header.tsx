import Divider from '../Divider/Divider';

const Header = () => {
	return (
		<header className='sticky top-0 h-14 bg-neutral-200 drop-shadow-noBlur font-serif text-3xl flex items-center justify-center z-10'>
			<div id='home-link' className='flex flex-col w-fit '>
				<span>SWC</span>
				<Divider />
			</div>
		</header>
	);
};

export default Header;
