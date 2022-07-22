import { Html, Head, Main, NextScript } from 'next/document';

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
					href='https://fonts.googleapis.com/css2?family=Maitree:wght@200;300;400;500;600;700&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<body className='bg-neutral-100'>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
