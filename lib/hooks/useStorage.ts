import { useLocalStorage } from 'react-use';
import { Cloud } from '../types';

// If only key is provided retrieve from ls, if key and value is provided, save to ls
function useStorage(key: string, cloud?: Cloud) {
	const [value, setValue] = useLocalStorage(key);
	if (cloud === undefined) {
		return value as Cloud | string[];
	} else {
		setValue(cloud);
	}
}

export default useStorage;
