import type { NextPage } from 'next';
import Head from 'next/head';
import FileInput from '../components/FileInput/FileDropper';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Simple Word Cloud</title>
				<meta
					name='description'
					content='Generate simple word clouds from text input or files'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<FileInput />
			</main>

			<footer className={styles.footer}></footer>
		</div>
	);
};

export default Home;
