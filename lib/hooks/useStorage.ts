import { Dispatch } from 'react';
import { useLocalStorage } from 'react-use';

function useStorage<T>(key: string) {
	// Get value and dispatch for the GIVEN key
	const [value, ,] = <[T, Dispatch<T>, () => void]>useLocalStorage(key);
	return value;
}

export default useStorage;
