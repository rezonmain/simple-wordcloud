import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useMeasure } from 'react-use';
import Button from '../components/Button/Button';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import WordCloud from '../components/WordCloud/WordCloud';
import demoArray from '../lib/data';

const Home: NextPage = () => {
	// Allows wordclout to get correct ref after first render
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
				className='flex flex-col items-center justify-center mx-auto gap-10'
			>
				<Hero />
				{firstRender && (
					<div id='word-cloud'>
						<WordCloud wordsArray={demoArray} size={{ w: width, h: width }} />
					</div>
				)}
				<div id='button-group' className='flex flex-row gap-2 items-center'>
					<Button type='action' text='Create New' />
					<span className='font-serif'>or</span>
					<Button type='upload' text='Upload'></Button>
				</div>
			</main>
		</>
	);
};

export default Home;
