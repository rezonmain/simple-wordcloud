import Head from 'next/head';
import CreatePage from '../../components/Pages/CreatePage/CreatePage';
import Cloud from '../../lib/classes/Cloud';

const New = () => {
	return (
		<>
			<Head>
				<title>Create Cloud</title>
				<meta
					name='Create word cloud'
					content='Create page for simple word cloud'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<CreatePage initialCloud={new Cloud()} />
		</>
	);
};

export default New;
