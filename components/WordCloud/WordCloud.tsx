import Layout, { LayoutConfig } from '../../lib/Layout';
import * as d3 from 'd3';
import d3Cloud from 'd3-cloud';
import { RefObject, useEffect, useRef } from 'react';
import useWindowSize from '../../lib/hooks/useWindow';

interface WordCloudProps {
	wordsArray: { text: string; size: number }[];
	config?: LayoutConfig;
}

const WordCloud = ({ wordsArray, config }: WordCloudProps) => {
	const svgRef = useRef<RefObject<SVGAElement>>();
	const draw = (word: d3Cloud.Word) => {
		// Create svg with given size
		const container = d3
			.select('#cloud-wrapper')
			.append('svg')
			.attr('width', l.size.w)
			.attr('height', l.size.h)
			.append('g')
			.style('position', 'relative')
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
			.style('fill', '#000000')
			.text((d) => d.text as string);
	};

	const removeCloud = () => {
		d3.select('#cloud-wrapper').selectAll('*').remove();
	};

	const size = useWindowSize({ w: 700, h: 700 });

	let l = new Layout(size, wordsArray, draw, config || Layout.DEFAULT);

	useEffect(() => {
		removeCloud();
		l.start();
	}, [size, wordsArray, config]);

	return (
		<div
			id='cloud-wrapper'
			className='w-screen aspect-square max-w-[700px] max-h-[700px]'
		></div>
	);
};

export default WordCloud;
