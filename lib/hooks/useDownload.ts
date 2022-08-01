import { useEffect } from 'react';

const useDownload = () => {
	useEffect(() => {
		const svgRoot = document.getElementById('wc-svg') as HTMLElement;
		const svgSource = svgRoot.outerHTML;
		const svgUri =
			'data:image/svg+xml;base64,' + Buffer.from(svgSource, 'base64');
		const download = document.getElementById('download');
		download?.setAttribute('href', svgUri);
	});
};

export default useDownload;
