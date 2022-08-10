import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../themes/chakraTheme';
import { useRouter } from 'next/router';
import NextNProgress from 'nextjs-progressbar';
function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	return (
		<ChakraProvider theme={theme}>
			<Component key={router.asPath} {...pageProps} />
			<NextNProgress height={5} startPosition={0} />
		</ChakraProvider>
	);
}

export default MyApp;
