import { Canvg, RenderingContext2D, presets } from 'canvg';

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

	async asPNG(fileName: string) {
		const preset = presets.offscreen();
		let canvas;
		try {
			canvas = new OffscreenCanvas(
				this.el?.clientWidth as number,
				this.el?.clientHeight as number
			);
		} catch {
			alert('Currently only supported in Google Chrome, working on a fix');
			return;
		}
		const ctx = canvas.getContext('2d');
		const v = await Canvg.from(
			ctx as RenderingContext2D,
			this.el?.outerHTML as string,
			preset
		);
		await v.render();

		const blob = await canvas.convertToBlob();
		const uri = URL.createObjectURL(blob);

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

`async function toPng(data) {
  const {
    width,
    height,
    svg
  } = data
  const canvas = new OffscreenCanvas(width, height)
  const ctx = canvas.getContext('2d')
  const v = await Canvg.from(ctx, svg, preset)

  // Render only first frame, ignoring animations and mouse.
  await v.render()

  const blob = await canvas.convertToBlob()
  const pngUrl = URL.createObjectURL(blob)

  return pngUrl
}

toPng({
  width: 600,
  height: 600,
  svg: './example.svg'
}).then((pngUrl) => {
  const img = document.querySelector('img')

  img.src = pngUrl
})`;
