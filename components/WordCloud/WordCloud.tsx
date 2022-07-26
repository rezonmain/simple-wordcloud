import Layout, { LayoutConfig } from '../../lib/Layout';
import * as d3 from 'd3';
import d3Cloud from 'd3-cloud';
import { useEffect } from 'react';

interface WordCloudProps {
	wordsArray: { text: string; size: number }[];
	size: { w: number; h: number };
	config?: LayoutConfig;
}

const WordCloud = ({ wordsArray, size, config }: WordCloudProps) => {
	const draw = (word: d3Cloud.Word) => {
		// Create svg with given size
		const container = d3
			.select('#cloud-wrapper')
			.append('svg')
			.attr('width', l.size.w)
			.attr('height', l.size.h)
			.attr('id', 'wc-svg')
			.append('g')
			.attr('transform', `translate(${l.size.w / 2},${l.size.h / 2})`);

		// Create the text from data array
		const wordContainer = container
			.selectAll('text')
			.data(word as d3Cloud.Word[]);

		// Set its transition properties
		wordContainer
			.transition()
			.duration(500)
			.attr('transfrom', (d) => `translate(${[d.x, d.y]})rotate(${d.rotate})`)
			.style('font-size', (d) => d.size + 'px');

		// Apend the new text svg element and sets its rotation
		wordContainer
			.enter()
			.append('text')
			.attr('text-anchor', 'middle')
			.attr('transform', (d) => `translate(${[d.x, d.y]})rotate(${d.rotate})`)
			.style('font-size', '1px')
			.transition()
			.duration(500)
			.style('font-size', (d) => d.size + 'px')
			.style('font-family', (d) => d.font as string)
			.style('fill', '#262626')
			.text((d) => d.text as string);
	};

	const removeCloud = () => {
		d3.select('#cloud-wrapper').selectAll('*').remove();
	};

	let l = new Layout(size, wordsArray, draw, config || Layout.DEFAULT);

	useEffect(() => {
		removeCloud();
		l.start();
	}, [size, wordsArray, config]);

	return <div id='cloud-wrapper'></div>;
};

export default WordCloud;
