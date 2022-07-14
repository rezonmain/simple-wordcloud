import { useEffect, useRef, useState } from 'react';

/* Returns window size on window resize end */
const useWindowSize = (bounds: { w: number; h: number }) => {
	let triggerChange = useRef(false);
	const [windowSize, setWindowSize] = useState({
		w: globalThis.innerWidth,
		h: globalThis.innerHeight,
	});
	useEffect(() => {
		const handleResizeEnd = () => {
			if (globalThis.innerWidth < bounds.w) {
				setWindowSize({ w: globalThis.innerWidth, h: globalThis.innerHeight });
				triggerChange.current = true;
			}
			if (globalThis.innerWidth > bounds.w) {
				triggerChange.current &&
					setWindowSize({
						w: globalThis.innerWidth,
						h: globalThis.innerHeight,
					});
				triggerChange.current = false;
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
