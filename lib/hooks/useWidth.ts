import { MutableRefObject, useEffect, useState } from 'react';

function useWidth(ref: MutableRefObject<HTMLDivElement>) {
	const [width, setWidth] = useState<number>();
	useEffect(() => {
		let prevWidth: number;
		new ResizeObserver((changes) => {
			for (const change of changes) {
				if (change.contentRect.width === prevWidth) return;
				prevWidth = change.contentRect.width;

				setWidth(change.contentRect.width);
			}
		}).observe(ref.current);
	});
	return width;
}

export default useWidth;
