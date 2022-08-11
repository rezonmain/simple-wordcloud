import Head from 'next/head';
import Button from '../../Button/Button';
import Header from '../../Header/Header';
import Hero from '../../Hero/Hero';
import { Skeleton, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const HomePage = () => {
	const SavedCloudsTable = dynamic(() => import('../../Table/Table'), {
		suspense: true,
	});
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
				</div>
				<Suspense
					fallback={
						<Stack>
							<Skeleton height='50px' />
							<Skeleton height='20px' />
							<Skeleton height='20px' />
						</Stack>
					}
				>
					<SavedCloudsTable as='homepage' />
				</Suspense>
			</main>
		</>
	);
};

export default HomePage;
