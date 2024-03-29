import { BsGithub, BsTwitter } from 'react-icons/bs';

const Footer = () => {
	return (
		<footer className='bg-neutral-800 font-serif font-neutral-100 text-neutral-100 flex flex-col items-center justify-center gap-3 py-5'>
			<div id='footer-icon-group' className='flex flex-row gap-5'>
				<a href='https://github.com/rezonmain/simple-wordcloud'>
					<BsGithub size='32px' fill='#f5f5f5' />
				</a>
				<a href='https://twitter.com/rezonmain'>
					<BsTwitter size='32px' fill='#f5f5f5' />
				</a>
			</div>
			<span className='text-md text-center'>&copy; 2022 rezonmain</span>
		</footer>
	);
};

export default Footer;
