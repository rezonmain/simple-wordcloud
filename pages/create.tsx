import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import CreatePage from '../components/Pages/CreatePage/CreatePage';
import { demoClouds } from '../lib/data';

const Create = ({
	id,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	// If I don't do this, when /create refreshed it loses context
	const [cloud, setCloud] = useState();

	useEffect(() => {
		const initialCloud = id
			? JSON.parse(localStorage.getItem(id) as string)
			: demoClouds[0];
		setCloud(initialCloud);
	}, []);

	return (
		<>
			<Head>
				<title>Create Cloud</title>
				<meta
					name='Create word cloud'
					content='Create page for simple word cloud'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			{cloud && <CreatePage initialCloud={cloud} />}
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	return { props: context.query };
};
export default Create;
