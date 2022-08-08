import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import CreatePage from '../components/Pages/CreatePage/CreatePage';

const Create = ({
	id,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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
			<CreatePage cloudId={id} />
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	return { props: context.query };
};
export default Create;
