import { NextPage } from 'next';
import Head from 'next/head';
import WordList from '../components/WordListModal/WordList';

const Dev: NextPage = () => {
	return (
		<>
			<Head>
				<title>Debug</title>
			</Head>
			<WordList />
		</>
	);
};

export default Dev;
