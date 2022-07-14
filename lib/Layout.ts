import d3Cloud from 'd3-cloud';
import * as d3 from 'd3';

export type LayoutConfig = {
	font?: string;
	limit?: number;
	lang?: 'eng' | 'fra' | 'esp';
	includeStopWords?: boolean;
	inclusePronouns?: boolean;
	scaling?: 'log' | 'linear' | 'sq';
	padding?: number;
};

class Layout {
	size;
	config: LayoutConfig;
	wordsArray;
	onWord;
	scale;

	static DEFAULT: LayoutConfig = {
		limit: 150,
		lang: 'eng',
		includeStopWords: false,
		inclusePronouns: false,
		scaling: 'log',
		padding: 1,
		font: 'Helvetica',
	};

	constructor(
		size: { w: number; h: number },
		wordsArray: { text: string; size: number }[],
		onWord: (draw: d3Cloud.Word) => void,
		config?: LayoutConfig
	) {
		this.size = this._bound(size);
		this.onWord = onWord;
		// If config object is provided override the default configuration parameters
		this.config = {
			...Layout.DEFAULT,
			...config,
		};
		this.wordsArray = this._limit(wordsArray, this.config.limit as number);
		this.scale = this._getScalefn(this.wordsArray);
	}

	/* Returns the d3Cloud layout object and runs start method on it,
  which initialiazes the word placement algorithm from d3Cloud */
	start = () => this._layout().start();

	_layout = () => {
		const limitedWords = this._limit(
			this.wordsArray,
			this.config.limit as number
		);
		return (
			d3Cloud()
				.size([this.size.w, this.size.h])
				.words(limitedWords)
				.padding(this.config.padding as number)
				// 0 or 90
				.rotate(() => Math.floor(Math.random() * 2) * 90)
				.font(this.config.font as string)
				// @ts-ignore
				.fontSize((d) => this.scale(d.size))
				.on('end', this.onWord)
		);
	};

	_limit = (words: { text: string; size: number }[], limit: number) => {
		/* Sort from biggest value to smallest 
    so bigger words show on cloud when limiting array, slice to limit */
		return words.sort((a, b) => b.size - a.size).slice(0, limit);
	};

	_bound(windowSize: { w: number; h: number }) {
		const maxH = 600;
		const maxW = 900;
		return {
			w: windowSize.w > maxW ? maxW : windowSize.w,
			h: windowSize.h > maxH ? maxH : windowSize.h,
		};
	}

	_getScalefn = (wordsArray: { text: string; size: number }[]) => {
		// WORDS MUST BE SORTED
		/* Make sure biggest word always fits inside given viewbox */
		const max = wordsArray[0].size;
		const min = wordsArray[wordsArray.length - 1].size;

		switch (this.config.scaling) {
			case 'log':
				return d3.scaleLog().domain([min, max]).range([1, 100]);
			case 'linear':
				return d3.scaleLinear().domain([min, max]).range([10, 200]);
			case 'sq':
				return d3.scalePow().exponent(2).domain([min, max]).range([20, 200]);
		}
	};
}

export default Layout;
