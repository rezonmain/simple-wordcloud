import { extendTheme } from '@chakra-ui/react';
import type {
	ComponentStyleConfig,
	ComponentMultiStyleConfig,
} from '@chakra-ui/theme';

const Menu: ComponentMultiStyleConfig = {
	parts: ['button'],
	baseStyle: {
		button: {
			fontFamily: 'Maitree',
		},
	},
	sizes: {
		md: {
			button: {
				fontSize: '1rem',
			},
		},
	},
	variants: {
		bold: {
			button: {
				fontWeight: 'bold',
			},
		},
	},
	defaultProps: {
		size: 'md',
	},
};

const Drawer: ComponentStyleConfig = {
	sizes: {
		xxs: {
			dialog: { maxW: '40vw' },
		},
	},
};

const theme = extendTheme({
	components: {
		Drawer,
		Menu,
	},
});

export default theme;
