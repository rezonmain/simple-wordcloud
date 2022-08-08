class MeasureText {
	canvas;
	constructor() {
		this.canvas = globalThis.document.createElement('canvas');
	}

	getTextWidth(text: string, font: string) {
		const context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
		context.font = font;
		const metrics = context.measureText(text);
		return metrics.width;
	}
}

export default MeasureText;
