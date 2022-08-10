import { Dispatch } from 'react';
import { useLocalStorage } from 'react-use';

function useStorage<T>(key: string) {
	// Get value from localstorage with given key
	const [value, ,] = <[T, Dispatch<T>, () => void]>useLocalStorage(key);
	return value;
}

export default useStorage;
