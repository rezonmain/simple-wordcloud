import CloudLayout, { LayoutConfig } from '../../lib/CloudLayout';
import * as d3 from 'd3';
import d3Cloud from 'd3-cloud';
import { useEffect, memo } from 'react';

interface WordCloudProps {
	wordArray: { text: string; size: number; enabled: boolean }[];
	size: { w: number; h: number };
	config?: LayoutConfig;
}

const WordCloud = ({ wordArray, size, config }: WordCloudProps) => {
	const cl = new CloudLayout(
		size,
		wordArray,
		draw,
		config || CloudLayout.DEFAULT
	);

	useEffect(() => {
		removeCloud();
		// This calls draw
		cl.start();
	});

	function removeCloud() {
		d3.select('#cloud-wrapper').selectAll('*').remove();
	}

	function draw(word: d3Cloud.Word) {
		// Create svg with given size
		const container = d3
			.select('#cloud-wrapper')
			.append('svg')
			.attr('width', cl.size.w)
			.attr('height', cl.size.h)
			.attr('id', 'wc-svg')
			.append('g')
			.attr('transform', `translate(${cl.size.w / 2},${cl.size.h / 2})`);

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
	}

	return <div id='cloud-wrapper' className='select-none'></div>;
};

export default WordCloud;
