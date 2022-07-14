import { useEffect, useState } from 'react';
/* Returns window size on window resize end */

// TODO: trigger when window grows to bound
const useWindowSize = (bounds: { w: number; h: number }) => {
	const [windowSize, setWindowSize] = useState({
		w: globalThis.innerWidth,
		h: globalThis.innerHeight,
	});
	useEffect(() => {
		const handleResizeEnd = () => {
			// Only trigger change when width is smaller than bound
			if (globalThis.innerWidth < bounds.w) {
				setWindowSize({ w: globalThis.innerWidth, h: globalThis.innerHeight });
			}
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

export default useWindowSize;
