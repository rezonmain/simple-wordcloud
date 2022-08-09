import { useEffect, useState } from 'react';

const useDeleteCloud = () => {
	// Lazy init state
	const [ids, setIds] = useState<string[]>([]);
	useEffect(() => {
		setIds(() => JSON.parse(localStorage.getItem('ids') as string));
	}, []);
	return (cloudId: string) => {
		// Remove the id from the ids store
		const newIds = ids.filter((id) => id !== cloudId);
		localStorage.setItem('ids', JSON.stringify(newIds));
		// Update state to trigger render
		setIds(newIds);
		// Remove cloud from localstorage
		localStorage.removeItem(cloudId);
	};
};

export default useDeleteCloud;
