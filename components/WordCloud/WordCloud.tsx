import Layout, { LayoutConfig } from '../../lib/Layout';
import * as d3 from 'd3';
import d3Cloud from 'd3-cloud';
import { useEffect } from 'react';

interface WordCloudProps {
	size: { w: number; h: number };
	wordsArray: { text: string; size: number }[];
	config?: LayoutConfig;
}

const WordCloud = ({ size, config, wordsArray }: WordCloudProps) => {
	const draw = (words: d3Cloud.Word) => {
		d3.select('#cloud-wrapper')
			.append('svg')
			.attr('width', layout.size.w)
			.attr('height', layout.size.h)
			.append('g')
			.attr(
				'transform',
				'translate(' + layout.size.w / 2 + ',' + layout.size.h / 2 + ')'
			)
			.selectAll('text')
			.data(words as d3Cloud.Word[])
			.enter()
			.append('text')
			.style('font-size', (d) => d.size + 'px')
			.style('font-family', 'Impact')
			.style('fill', '#000000')
			.attr('text-anchor', 'middle')
			.attr('transform', function (d) {
				return 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')';
			})
			// @ts-ignore
			.text((d) => d.text);
	};

	const removeCloud = () => {
		d3.select('#cloud-wrapper').selectAll('*').remove();
	};

	const layout = new Layout(size, wordsArray, draw);
	console.log(layout.wordsArray);

	useEffect(() => {
		removeCloud();
		layout.start();
	});

	return <div id='cloud-wrapper' className='border'></div>;
};

export default WordCloud;
