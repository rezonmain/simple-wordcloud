import { useEffect, useState } from 'react';
import { demoClouds } from '../data';
import { Cloud } from '../types';

const useSavedClouds = () => {
	const [savedClouds, setSavedClouds] = useState<Cloud[]>(demoClouds);
	useEffect(() => {
		const ids = JSON.parse(localStorage.getItem('ids') as string) as string[];
		const savedClouds: Cloud[] = [];
		ids.forEach((id) =>
			savedClouds.push(JSON.parse(localStorage.getItem(id) as string))
		);
		setSavedClouds(savedClouds);
	}, []);
	return savedClouds;
};

export default useSavedClouds;
