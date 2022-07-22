import type { NextPage } from 'next';
import Head from 'next/head';
import { LegacyRef, useEffect, useState } from 'react';
import { useMeasure } from 'react-use';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import WordCloud from '../components/WordCloud/WordCloud';
import demoArray from '../lib/data';

const Home: NextPage = () => {
	const [firstRender, setFirstRender] = useState(false);
	const [ref, { width }] = useMeasure();

	useEffect(() => {
		setFirstRender(true);
	}, []);
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
				// @ts-ignore
				ref={ref}
				style={{ width: 'clamp(330px, 90vw, 418px' }}
				className='flex flex-col items-center justify-center mx-auto'
			>
				<Hero />
				{firstRender && (
					<WordCloud wordsArray={demoArray} size={{ w: width, h: width }} />
				)}
			</main>
		</>
	);
};

export default Home;
