class MeasureText {
	/* 
	Uses a special canvas context function to measure 
	text in px, with given text and font family, size and style
	*/
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
