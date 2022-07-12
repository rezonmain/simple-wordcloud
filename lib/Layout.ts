import d3Cloud from 'd3-cloud';

/* Make sure biggest word always fits inside given viewbox */

type LayoutConfig = {
	font: string;
	limit: number;
	lang: 'eng' | 'fra' | 'esp';
	includeStopWords: boolean;
	inclusePronouns: boolean;
};

class Layout {
	size;
	config: LayoutConfig;
	words;
	onWord;

	constructor(
		size: { w: number; h: number },
		words: { text: string; size: number }[],
		onWord: (draw: d3Cloud.Word) => void,
		config?: LayoutConfig
	) {
		this.size = size;
		this.words = words;
		this.onWord = onWord;
		// If config object is provided override the default configuration parameters
		this.config = {
			font: 'serif',
			limit: 150,
			lang: 'eng',
			includeStopWords: false,
			inclusePronouns: false,
			...config,
		};
	}

	/* Returns the d3Cloud layout object and runs start method on it,
  which initialiazes the word placemant algorithm from d3Cloud */
	start = () => this._layout().start();

	_layout = () => {
		const words = this._limit(this.words, this.config.limit);
		console.log(words);
		return (
			d3Cloud()
				.size([this.size.w, this.size.h])
				.words(words)
				.padding(1)
				// 0 or 90
				.rotate(() => Math.floor(Math.random() * 2) * 90)
				.font('Impact')
				// @ts-ignore
				.fontSize((d) => d.size)
				.on('word', this.onWord)
		);
	};

	_limit = (words: { text: string; size: number }[], limit: number) => {
		/* Sort from biggest value to smallest 
    so bigger words show on cloud when limiting array, slice to limit */
		return words.sort((a, b) => b.size - a.size).slice(0, limit);
	};

	_getRange = (
		w: number,
		h: number,
		words: { text: string; size: number }[]
	) => {
		// Get min and max values from words array
		const max = words[0].size;
		const min = words[words.length - 1].size;

		// If difference between min max is big use logaritmic scaling
	};
}

export default Layout;
