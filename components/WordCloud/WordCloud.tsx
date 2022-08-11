import CloudLayout, { LayoutConfig } from '../../lib/classes/CloudLayout';
import * as d3 from 'd3';
import d3Cloud from 'd3-cloud';
import { useEffect } from 'react';
import { WordInstance } from '../../lib/types';

interface WordCloudProps {
	wordArray: WordInstance[];
	size: { w: number; h: number };
	config?: LayoutConfig;
	onLoadStart: () => void;
	onLoadEnd: () => void;
}

const WordCloud = ({
	wordArray,
	size,
	config,
	onLoadStart,
	onLoadEnd,
}: WordCloudProps) => {
	let cl = new CloudLayout(
		size,
		wordArray,
		draw,
		config || CloudLayout.DEFAULT
	);
	useEffect(() => {
		removeCloud();
		(async () => {
			/* Wait for web fonts to load, so as not to render the cloud with a fallback font
			which messes with the word positioning */
			onLoadStart();
			await document.fonts.ready;
			// This calls draw
			cl.start();
			// Binds the generated svg to the canvas
			await cl.bind();
		})();
		onLoadEnd();
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
			.attr('version', '1.1')
			.attr('xmlns', 'http://www.w3.org/2000/svg')
			.append('g')
			.attr('transform', `translate(${cl.size.w / 2},${cl.size.h / 2})`);

		// Create the text from data array
		const wordContainer = container
			.selectAll('text')
			.data(word as d3Cloud.Word[]);

		// Apend the new text svg element and sets its rotation
		wordContainer
			.enter()
			.append('text')
			.attr('text-anchor', 'middle')
			.attr('transform', (d) => `translate(${[d.x, d.y]})rotate(${d.rotate})`)
			// .style('font-size', '1px')
			.style('font-size', (d) => d.size + 'px')
			.style('font-family', (d) => d.font as string)
			.style('fill', '#262626')
			.text((d) => d.text as string);
	}
	return (
		<>
			<div id='cloud-wrapper' className='select-none hidden'></div>
			<canvas id='wc-canvas' className='' />
		</>
	);
};

export default WordCloud;
