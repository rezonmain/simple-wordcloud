import { useEffect, useState } from 'react';

/* Returns window size on window resize end */
const useWindow = () => {
	const [windowSize, setWindowSize] = useState({
		w: globalThis.innerWidth,
		h: globalThis.innerHeight,
	});
	useEffect(() => {
		const handleResizeEnd = () => {
			setWindowSize({ w: globalThis.innerWidth, h: globalThis.innerHeight });
		};
		let resizeEnd: NodeJS.Timeout;
		globalThis.onresize = () => {
			globalThis.clearTimeout(resizeEnd);
			resizeEnd = globalThis.setTimeout(handleResizeEnd, 100);
		};
		return () => {
			globalThis.clearTimeout(resizeEnd);
		};
	});

	return windowSize;
};

export default useWindow;
