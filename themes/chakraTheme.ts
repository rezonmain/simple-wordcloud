import { extendTheme } from '@chakra-ui/react';
import type { ComponentStyleConfig } from '@chakra-ui/theme';
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
	},
});

export default theme;
