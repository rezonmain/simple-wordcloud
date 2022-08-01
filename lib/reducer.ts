import CloudLayout from './CloudLayout';
import { CloudContext } from './context/CloudContext';
import type { Cloud } from './types';

export type Action = {
	type: 'updateTitle' | 'toggleWord';
	payload?: any;
};

const cloudReducer = (state: Cloud, action: Action): Cloud => {
	const { type, payload } = action;
	switch (type) {
		case 'updateTitle':
			return { ...state, title: payload as string };
		case 'toggleWord':
			return CloudLayout.toggleWord(state, payload.word, payload.state);
	}
};

export default cloudReducer;
