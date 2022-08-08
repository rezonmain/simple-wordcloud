import d3Cloud from 'd3-cloud';
import * as d3 from 'd3';
import type { Rotation, Word } from '../types';
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
	onWord;
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
		wordArray: Word[],
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
		this.wordArray = this._limit(wordArray, this.config.limit as number);
		// filter out words with !enabled and pass it to d3Cloud lauyout builder
		this.enabledWords = this.wordArray.filter((word) => word.enabled === true);
		this.scale = this._getScalefn(this.wordArray);

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
		return (
			d3Cloud()
				.size([this.size.w, this.size.h])
				.words(this.enabledWords)
				.padding(this.config.padding as number)
				.rotate(this._getRotation)
				.font(this.config.font as string)
				// @ts-ignore
				.fontSize((d) => this.scale(d.size))
				.on('end', this.onWord)
		);
	};

	private _limit = (words: Word[], limit: number) => {
		/* Sort from biggest value to smallest 
    so bigger words show on cloud when limiting array, slice to limit */
		return words.sort((a, b) => b.size - a.size).slice(0, limit);
	};

	private _getScalefn = (wordsArray: { text: string; size: number }[]) => {
		// WORDS MUST BE SORTED
		/* Make sure biggest word always fits inside given viewbox */
		const max = wordsArray[0].size;
		const min = wordsArray[wordsArray.length - 1].size;

		switch (this.config.scaling) {
			case 'log':
				return d3
					.scaleLog()
					.domain([min, max])
					.range([1, this._getLargestFontSize()]);
			case 'linear':
				return d3
					.scaleLinear()
					.domain([min, max])
					.range([10, this._getLargestFontSize()]);
			case 'sq':
				return d3
					.scalePow()
					.exponent(2)
					.domain([min, max])
					.range([15, this._getLargestFontSize()]);
		}
	};

	private _getLargestFontSize = () => {
		// This functions scales the font size with the width
		// Makes sure the biggest word always renders

		let fontSize = 500;
		const biggesWord = this.enabledWords[0].text;
		let wordWidth = this.size.w;
		const measure = new MeasureText();

		// Loop until wordWidth is half of the word cloud width
		// Return fontSize that rendered this condition true
		while (wordWidth / this.size.w >= 0.5) {
			fontSize -= 1;
			const font = `${fontSize}px ${this.config.font}`;
			wordWidth = measure.getTextWidth(biggesWord, font);
		}
		console.log(fontSize);
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
