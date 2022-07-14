import type { NextPage } from 'next';
import Head from 'next/head';
import FileDropper from '../components/FileDropper/FileDropper';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
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
				<FileDropper />
			</main>
		</>
	);
};

export default Home;
