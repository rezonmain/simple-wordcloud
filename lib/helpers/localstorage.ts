import { demoClouds } from '../data';
const saveData = () => {
	demoClouds.forEach((cloud) => {
		const key = cloud.id;
		const value = JSON.stringify(cloud);
		localStorage.setItem(key, value);
	});
};

export default saveData;
