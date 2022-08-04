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

	asPNG(fileName: string) {
		const canvas = document.querySelector('canvas') as HTMLCanvasElement;
		const uri = canvas.toDataURL('image/png');
		this._downloadAction(uri, fileName);
	}

	asJPG(fileName: string) {
		// Clone the canvas with transparent bg
		let canvas = document.querySelector('canvas') as HTMLCanvasElement;
		var tempCanvas = canvas.cloneNode(true) as HTMLCanvasElement;
		var ctx = tempCanvas.getContext('2d') as CanvasRenderingContext2D;
		// Fill the cloned canvas white
		ctx.fillStyle = '#FFF';
		ctx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
		// Super impose the original canvas that contains the cloud
		ctx.drawImage(canvas, 0, 0);
		// Get uri and download
		const uri = tempCanvas.toDataURL('image/jpeg', '0.75');
		this._downloadAction(uri, fileName);
	}

	private _downloadAction(href: string, name: string) {
		const a = document.createElement('a');
		a.href = href;
		a.download = name;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	}
}

export default Downloader;
