import { useEffect, useState } from 'react';

const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState({
		w: globalThis.innerWidth,
		h: globalThis.innerHeight,
	});
	useEffect(() => {
		const handleResize = () => {
			setWindowSize({ w: globalThis.innerWidth, h: globalThis.innerHeight });
		};
		globalThis.addEventListener('resize', handleResize);
		return () => {
			globalThis.removeEventListener('resize', handleResize);
		};
	});

	return windowSize;
};

export default useWindowSize;
