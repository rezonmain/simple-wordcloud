import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import WordCloud from '../components/WordCloud/WordCloud';
import demoArray from '../lib/data';

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
			<Header />
			<main
				style={{ width: 'clamp(330px, 90vw, 418px' }}
				className='flex flex-col items-center justify-center mx-auto'
			>
				<Hero />
				<WordCloud wordsArray={demoArray} />
			</main>
		</>
	);
};

export default Home;
