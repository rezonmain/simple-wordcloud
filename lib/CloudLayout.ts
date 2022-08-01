import d3Cloud from 'd3-cloud';
import * as d3 from 'd3';
import type { Cloud, Rotation } from './types';

export type LayoutConfig = {
	font?: string;
	limit?: number;
	lang?: 'eng' | 'fra' | 'esp';
	includeStopWords?: boolean;
	includePronouns?: boolean;
	scaling?: 'log' | 'linear' | 'sq';
	padding?: number;
	rotation?: Rotation;
};

class CloudLayout {
	size;
	config: LayoutConfig;
	wordsArray;
	onWord;
	scale;
	angles;
	rotationsNumber;
	angleFrom;
	angleTo;

	static DEFAULT: LayoutConfig = {
		font: 'Helvetica',
		limit: 100,
		lang: 'eng',
		includeStopWords: false,
		includePronouns: false,
		scaling: 'linear',
		padding: 1,
		rotation: 'none',
	};

	constructor(
		size: { w: number; h: number },
		wordsArray: { text: string; size: number }[],
		onWord: (draw: d3Cloud.Word) => void,
		config?: LayoutConfig
	) {
		this.size = size;
		this.onWord = onWord;
		// If config object is provided override the default configuration parameters
		this.config = {
			...CloudLayout.DEFAULT,
			...config,
		};
		this.wordsArray = this._limit(wordsArray, this.config.limit as number);
		this.scale = this._getScalefn(this.wordsArray);

		switch (this.config.rotation) {
			default:
			case 'none':
				this.rotationsNumber = 1;
				this.angleFrom = 0;
				this.angleTo = 0;
				break;
			case 'right':
				this.rotationsNumber = 3;
				this.angleFrom = 90;
				this.angleTo = 90;
				break;
			case 'random':
				this.rotationsNumber = 6;
				this.angleFrom = 30;
				this.angleTo = 60;
				break;
		}
		this.angles = this._getQuantizedAngles();
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
				.rotate(this._getRotation)
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

	_getScalefn = (wordsArray: { text: string; size: number }[]) => {
		// WORDS MUST BE SORTED
		/* Make sure biggest word always fits inside given viewbox */
		const max = wordsArray[0].size;
		const min = wordsArray[wordsArray.length - 1].size;

		switch (this.config.scaling) {
			case 'log':
				return d3
					.scaleLog()
					.domain([min, max])
					.range([1, this._widthToFSize()]);
			case 'linear':
				return d3
					.scaleLinear()
					.domain([min, max])
					.range([10, this._widthToFSize()]);
			case 'sq':
				return d3
					.scalePow()
					.exponent(2)
					.domain([min, max])
					.range([15, this._widthToFSize()]);
		}
	};

	_widthToFSize = () => {
		// This functions scales the font size with the width
		// Makes sure the biggest word always renders
		return this.size.w * (5 / 17) - 100 / 17;
	};

	_getRotation = () => {
		// @ts-ignore
		const number = this.rotationsNumber as number;
		const from = this.angleFrom as number;
		if (number === 1) return from;
		return this.angles[this._rand(number - 1)];
	};

	_rand = (max: number, min = 0) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	_getQuantizedAngles = () => {
		const number = this.rotationsNumber;
		const from = this.angleFrom;
		const to = this.angleTo;
		const distance = Math.abs(to - from);
		const step = distance / (number - 1);
		const offset = 90 - to;
		// Formula to equal divide angle and return corresponding word orientation
		return Array.from({ length: number }, (_, i) => {
			return 90 - ((number - i - 1) * step + offset);
		});
	};
}

export default CloudLayout;
