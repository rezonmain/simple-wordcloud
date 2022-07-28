import Head from 'next/head';
import Button from '../../Button/Button';
import Header from '../../Header/Header';
import Hero from '../../Hero/Hero';
import Table from '../../Table/Table';
import demo from '../../../lib/data';
import Link from 'next/link';

const HomePage = () => {
	return (
		<>
			<Head>
				<title>Simple Word Cloud</title>
				<meta content='Generate simple word clouds from text input or files' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<main className='flex flex-col items-center justify-center mx-auto gap-14 my-10 min-w-[330px] w-[90vw] max-w-[480px]'>
				<Hero />

				<div id='button-group' className='flex flex-row gap-2 items-center'>
					<Link href={'/create'}>
						<Button type='action' text='Create New' />
					</Link>
					<span className='font-serif'>or</span>
					<Button type='upload' text='Upload'></Button>
				</div>
				<Table savedClouds={demo} />
			</main>
		</>
	);
};

export default HomePage;
