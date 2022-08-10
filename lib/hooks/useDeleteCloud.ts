import { useEffect, useState } from 'react';

const useDeleteCloud = () => {
	// FIX: (test) I don't think this state var is necessary?
	const [ids, setIds] = useState<string[]>([]);
	useEffect(() => {
		// Get ids after first render because localstorage does not exist on server side
		setIds(() => JSON.parse(localStorage.getItem('ids') as string));
	}, []);
	// Return a callback that enables component to delete a cloud on ls
	return (cloudId: string) => {
		// Remove the id from the ids store
		const newIds = ids.filter((id) => id !== cloudId);
		localStorage.setItem('ids', JSON.stringify(newIds));
		// Update state to trigger component render
		setIds(newIds);
		// Remove cloud from localstorage
		localStorage.removeItem(cloudId);
	};
};

export default useDeleteCloud;
