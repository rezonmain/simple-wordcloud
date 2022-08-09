import { demoClouds } from '../data';
const saveData = () => {
	const ids: string[] = [];
	demoClouds.forEach((cloud) => {
		ids.push(cloud.id);
		const key = cloud.id;
		const value = JSON.stringify(cloud);
		localStorage.setItem(key, value);
	});
	localStorage.setItem('ids', JSON.stringify(ids));
};

export default saveData;
