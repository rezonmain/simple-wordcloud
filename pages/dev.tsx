import { NextPage } from 'next';
import Head from 'next/head';
import WordList from '../components/WordList/WordList';
import WordRotation from '../components/WordRotation/WordRotation';

const Dev: NextPage = () => {
	return (
		<>
			<Head>
				<title>Debug</title>
			</Head>
			<WordRotation />
		</>
	);
};

export default Dev;
