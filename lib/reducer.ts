import type { Cloud } from './types';

export type Action = {
	type: 'updateTitle';
	payload?: string;
};

const cloudReducer = (state: Cloud, action: Action): Cloud => {
	const { type, payload } = action;
	switch (type) {
		case 'updateTitle':
			console.log(payload);
			return { ...state, title: payload as string };
	}
};

export default cloudReducer;
