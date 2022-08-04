import { useEffect } from 'react';

const useDownload = () => {
	useEffect(() => {
		const svgRoot = document.getElementById('wc-svg') as HTMLElement;
		const svgSource = svgRoot.outerHTML;
		const svgUri = 'data:image/svg+xml;base64,' + btoa(svgSource);
		const download = document.getElementById('download');
		download?.setAttribute('href', svgUri);
	});
};

export default useDownload;
