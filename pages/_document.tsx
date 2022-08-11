import { Html, Head, Main, NextScript } from 'next/document';
import Footer from '../components/Footer/Footer';

const Document = () => {
	return (
		<Html>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='true'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Anton&family=Kalam&family=Maitree:wght@200;300;400;500;600;700&family=Roboto&family=Roboto+Mono&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<body className='bg-neutral-100'>
				<Main />
				<NextScript />
			</body>
			<Footer />
		</Html>
	);
};

export default Document;
