import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../themes/chakraTheme';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	return (
		<ChakraProvider theme={theme}>
			<Component key={router.asPath} {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
