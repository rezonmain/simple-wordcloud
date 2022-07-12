import { useEffect, useState } from 'react';
import * as d3 from 'd3';
import d3Cloud from 'd3-cloud';
import getLayout from './Layout';

interface WordCloudProps {
	data: { text: string; size: number }[];
}

const WordCloud = ({ data }: WordCloudProps) => {
	const config = { w: 1000, h: 1000, font: 'impact', limit: 100 };
	const [layout, setLayout] = useState(getLayout(config, data, draw));

	function draw(words: d3Cloud.Word) {
		d3.select('#cloud-wrapper')
			.append('svg')
			.attr('width', layout.size()[0])
			.attr('height', layout.size()[1])
			.append('g')
			.attr(
				'transform',
				'translate(' + layout.size()[0] / 2 + ',' + layout.size()[1] / 2 + ')'
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
	}

	useEffect(() => {
		// Calls draw after calculating the words layout
		layout.start();
	}, []);

	return <div id='cloud-wrapper'></div>;
};

export default WordCloud;
