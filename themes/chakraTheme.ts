import { extendTheme } from '@chakra-ui/react';
import type { ComponentStyleConfig } from '@chakra-ui/theme';
const Drawer: ComponentStyleConfig = {
	sizes: {
		xxs: {
			dialog: { maxW: '40vw' },
		},
	},
};

// Toast implements Alert
const Alert: ComponentStyleConfig = {
	baseStyle: {
		title: {
			fontFamily: 'Maitree',
		},
		description: {
			fontFamily: 'Maitree',
		},
	},
};

const theme = extendTheme({
	components: {
		Drawer,
		Alert,
	},
});

export default theme;
