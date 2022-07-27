import { NextPage } from 'next';
import Head from 'next/head';
import CreatePage from '../components/Pages/CreatePage/CreatePage';

const Create: NextPage = () => {
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
			<CreatePage />
		</>
	);
};
export default Create;
