import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

function MyApp({ Component, pageProps }: AppProps) {
	const theme = extendTheme({
		components: {
			Drawer: {
				sizes: {
					xxs: {
						dialog: { maxW: '48vw' },
					},
				},
			},
		},
	});
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
