import CloudLayout from './CloudLayout';
import type { Cloud } from './types';

export type Action = {
	type: 'updateTitle' | 'toggleWord' | 'changeFont';
	payload?: any;
};

const cloudReducer = (state: Cloud, action: Action): Cloud => {
	const { type, payload } = action;
	switch (type) {
		case 'updateTitle':
			return { ...state, title: payload as string };
		case 'toggleWord':
			return CloudLayout.toggleWord(state, payload.word, payload.state);
		case 'changeFont':
			return {
				...state,
				layout: {
					...state.layout,
					font: payload as string,
				},
			};
		default:
			return state;
	}
};

export default cloudReducer;
