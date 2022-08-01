import type { Cloud, Rotation } from './types';

export type Action = {
	type:
		| 'updateTitle'
		| 'toggleWord'
		| 'changeFont'
		| 'changeLimit'
		| 'changeRotation';
	payload?: any;
};

const cloudReducer = (state: Cloud, action: Action): Cloud => {
	const { type, payload } = action;
	switch (type) {
		case 'updateTitle':
			return { ...state, title: payload as string };
		case 'toggleWord':
			return { ...state, wordArray: payload };
		case 'changeFont':
			return {
				...state,
				layout: {
					...state.layout,
					font: payload as string,
				},
			};
		case 'changeLimit':
			return {
				...state,
				layout: {
					...state.layout,
					limit: payload as number,
				},
			};
		case 'changeRotation':
			return {
				...state,
				layout: {
					...state.layout,
					rotation: payload as Rotation,
				},
			};
		default:
			return state;
	}
};

export default cloudReducer;
