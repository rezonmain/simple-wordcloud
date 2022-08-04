class Downloader {
	id;
	el;
	constructor() {
		this.id = 'wc-svg';
		this.el = document.getElementById(this.id);
		if (!this.el) {
			console.debug(
				`Element with id: ${this.id} was not found, download will fail`
			);
			return;
		}
	}

	asSVG(fileName: string) {
		const uri =
			'data:image/svg+xml;base64,' + btoa(this.el?.outerHTML as string);
		this._downloadAction(uri, fileName);
	}

	private _downloadAction(href: string, name: string) {
		const a = document.createElement('a');
		a.setAttribute('href', href);
		a.setAttribute('download', name);
		document.body.appendChild(a);
		a.click();
		// document.body.removeChild(a);
	}
}

export default Downloader;
