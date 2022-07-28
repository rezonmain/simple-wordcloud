import { useEffect, useState } from 'react';

const useMedia = (query: string) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const mq = globalThis.matchMedia(query);
		const onChange = () => {
			setMatches(mq.matches);
		};
		mq.addEventListener('change', onChange);
		return () => {
			mq.removeEventListener('change', onChange);
		};
	}, [query]);

	return matches;
};

export default useMedia;
