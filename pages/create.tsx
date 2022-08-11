import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CreatePage from '../components/Pages/CreatePage/CreatePage';
import Cloud from '../lib/classes/Cloud';
import FontPreloader from '../lib/classes/FontPreloader';

const Create = ({
	id,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	new FontPreloader();
	const router = useRouter();
	// If I don't do this, when /create is refreshed it loses context
	const [cloud, setCloud] = useState();

	useEffect(() => {
		const initialCloud = JSON.parse(localStorage.getItem(id) as string);
		// If initial cloud is undefined open /create with new cloud
		setCloud(initialCloud || new Cloud());
		// If provided id is invalid (could't find a cloud) redirect to new cloud
		if (!initialCloud && id) {
			router.push('/create', '/create/new');
		}
	}, [id, router.query.slug, router]);

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
