import d3Cloud from 'd3-cloud';
import * as d3 from 'd3';
import type { Rotation, WordInstance } from '../types';
import { Canvg, RenderingContext2D } from 'canvg';
import MeasureText from './MeasureText';

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
	wordArray;
	onEnd;
	scale;
	angles;
	rotationsNumber;
	angleFrom;
	angleTo;
	enabledWords;

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
		wordArray: WordInstance[],
		onEnd: (word: d3Cloud.Word) => void,
		config?: LayoutConfig
	) {
		this.size = size;
		this.onEnd = onEnd;
		// If config object is provided override the default configuration parameters
		this.config = {
			...CloudLayout.DEFAULT,
			...config,
		};
		this.wordArray = this._limit(wordArray, this.config.limit as number);
		// filter out words with !enabled and pass it to d3Cloud lauyout builder
		this.enabledWords = this.wordArray.filter((word) => word.enabled === true);
		this.scale = this._getScalefn(this.enabledWords);

		switch (this.config.rotation) {
			default:
			case 'none':
				this.rotationsNumber = 1;
				this.angleFrom = 0;
				this.angleTo = 0;
				break;
			case 'right':
				this.rotationsNumber = 3;
				this.angleFrom = -90;
				this.angleTo = 90;
				break;
			case 'random':
				this.rotationsNumber = 5;
				this.angleFrom = -60;
				this.angleTo = 60;
				break;
		}
		this.angles = this._getQuantizedAngles();
	}

	/* Returns the d3Cloud layout object and runs start method on it,
  which initialiazes the word placement algorithm from d3Cloud */
	start = () => this._layout().start();

	bind = async () => {
		const svg = document.getElementById('wc-svg')?.outerHTML as string;
		const canvas = document.querySelector('canvas') as HTMLCanvasElement;
		const ctx = canvas.getContext('2d') as RenderingContext2D;
		const v = await Canvg.from(ctx, svg);
		v.start();
		window.onbeforeunload = () => {
			v.stop();
		};
	};

	private _layout = () => {
		const words = this.enabledWords.map((word) => ({
			text: word.word,
			size: word.instances,
		}));
		return (
			d3Cloud()
				.size([this.size.w, this.size.h])
				.words(words)
				.padding(this.config.padding as number)
				.rotate(this._getRotation)
				.font(this.config.font as string)
				// @ts-ignore
				.fontSize((d) => this.scale(d.size))
				.on('end', this.onEnd)
		);
	};

	private _limit = (words: WordInstance[], limit: number) => {
		/* Sort from biggest value to smallest 
    so bigger words show on cloud when limiting array, slice to limit */
		return words.sort((a, b) => b.instances - a.instances).slice(0, limit);
	};

	private _getScalefn = (wordsArray: WordInstance[]) => {
		// ***INPUT WORDSARRAY MUST BE SORTED***

		const max = wordsArray[0].instances;
		const min = wordsArray[wordsArray.length - 1].instances;

		switch (this.config.scaling) {
			case 'log':
				return d3
					.scaleLog()
					.domain([min, max])
					.range([10, this._getLargestWordFontSize()]);
			case 'linear':
				return d3
					.scaleLinear()
					.domain([min, max])
					.range([10, this._getLargestWordFontSize()]);
			case 'sq':
				return d3
					.scalePow()
					.exponent(2)
					.domain([min, max])
					.range([1, this._getLargestWordFontSize()]);
		}
	};

	private _getLargestWordFontSize = () => {
		/* This functions returns the ideal font size for the biggest word
		this is done because d3-cloud does not render a word if it doesn't fit in 
		the viewbox */

		let fontSize = 500;
		const biggesWord = this.enabledWords[0].word;
		// Set word witdth as the size of the canvas for now
		let wordWidth = this.size.w;
		const measure = new MeasureText();

		// Loop until wordWidth is half of the word cloud width
		// Return fontSize that rendered this condition true
		while (wordWidth / this.size.w >= 0.5) {
			fontSize -= 1;
			const font = `${fontSize}px ${this.config.font}`;
			wordWidth = measure.getTextWidth(biggesWord, font);
		}
		return fontSize;
	};

	private _getRotation = () => {
		// @ts-ignore
		const number = this.rotationsNumber as number;
		const from = this.angleFrom as number;
		if (number === 1) return from;
		return this.angles[this._rand(number - 1)];
	};

	private _rand = (max: number, min = 0) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	private _getQuantizedAngles = () => {
		const number = this.rotationsNumber;
		const from = this.angleFrom;
		const to = this.angleTo;
		const distance = Math.abs(to - from);
		const step = distance / (number - 1);
		const offset = 90 - to;
		if (number === 1) {
			return [from];
		}
		// Formula to equal divide angle and return corresponding word orientation
		return Array.from({ length: number }, (_, i) => {
			return 90 - ((number - i - 1) * step + offset);
		});
	};
}

export default CloudLayout;
