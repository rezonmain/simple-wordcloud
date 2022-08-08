import type { Cloud, Rotation, WordInstance } from './types';

export type Action = {
	type:
		| 'updateTitle'
		| 'updateTextArea'
		| 'updateWordArray'
		| 'toggleWord'
		| 'changeFont'
		| 'changeLimit'
		| 'changeRotation'
		| 'toggleSource';
	payload?: any;
};

const cloudReducer = (state: Cloud, action: Action): Cloud => {
	const { type, payload } = action;
	switch (type) {
		case 'updateTitle':
			return { ...state, title: payload as string };
		case 'updateTextArea':
			return { ...state, textAreaValue: payload as string };
		case 'updateWordArray': {
			return { ...state, wordArray: payload as WordInstance[] };
		}
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
		case 'toggleSource':
			return {
				...state,
				source: !state.source,
			};
		default:
			return state;
	}
};

export default cloudReducer;
