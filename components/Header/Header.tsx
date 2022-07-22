import Divider from '../Divider/Divider';

const Header = () => {
	return (
		<header className='w-screen h-16 bg-neutral-200 drop-shadow-noBlur font-serif text-3xl flex items-center justify-center'>
			<div id='home-link' className='flex flex-col w-fit '>
				<span>SWC</span>
				<Divider />
			</div>
		</header>
	);
};

export default Header;
