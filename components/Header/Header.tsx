import Link from 'next/link';
import Button from '../Button/Button';
import Divider from '../Divider/Divider';

const Header = () => {
	return (
		<header className='top-0 h-14 font-serif text-2xl flex items-center justify-between px-7 z-10 text-neutral-800 lg:justify-around lg:px-0'>
			<div id='home-link' className='flex flex-col w-fit '>
				<Link href={'/'}>
					<a>
						<span>SWC</span>
						<Divider />
					</a>
				</Link>
			</div>
			<div>
				<Link href={'/create'}>
					<Button type='header' text='Create' />
				</Link>
			</div>
		</header>
	);
};

export default Header;
