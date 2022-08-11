import { useToast } from '@chakra-ui/react';
import { useCallback } from 'react';
import { Cloud } from '../types';

const useSaveCloud = (cloud: Cloud) => {
	const toast = useToast({
		title: 'Save Successful',
		position: 'top-right',
		status: 'success',
		duration: 2500,
		isClosable: true,
	});
	/* Returns a callback that enables component to save a cloud
		 do not save if cloud did not change */
	// FIX: cloud does saves even if it's not changed
	return useCallback(() => {
		let ids = JSON.parse(localStorage.getItem('ids') as string) as string[];
		// If there is no ids store, initialize it
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
		toast({
			description: `Cloud was saved succesfully as ${cloud.title}`,
		});
	}, [cloud]);
};

export default useSaveCloud;
