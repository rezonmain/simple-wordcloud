import { NextPage } from 'next';
import Head from 'next/head';
import WordCloudWidget from '../components/WordCloud/WordCloudWidget';

const Create: NextPage = () => {
	return (
		<>
			<Head>
				<title>Simple Word Cloud</title>
				<meta
					name='description'
					content='Generate simple word clouds from text input or files'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<WordCloudWidget />
			</main>
		</>
	);
};
export default Create;
