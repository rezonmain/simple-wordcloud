import { useCallback } from 'react';
import { Cloud } from '../types';

const useSaveCloud = (cloud: Cloud) => {
	return useCallback(() => {
		let ids = JSON.parse(localStorage.getItem('ids') as string) as string[];

		// if there is no ids store, initialize it
		if (!ids) {
			ids = [];
		}
		// If cloud is new, store its id
		if (!ids.includes(cloud.id)) {
			ids.push(cloud.id);
			localStorage.setItem('ids', JSON.stringify(ids));
		}
		// Update timestamp
		cloud.ts = Date.now();
		localStorage.setItem(cloud.id, JSON.stringify(cloud));
	}, [cloud]);
};

export default useSaveCloud;
