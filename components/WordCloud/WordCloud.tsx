import Layout, { LayoutConfig } from '../../lib/Layout';
import * as d3 from 'd3';
import d3Cloud from 'd3-cloud';
import { useEffect, useRef } from 'react';
import useWindowSize from '../../lib/hooks/useWindow';

interface WordCloudProps {
	wordsArray: { text: string; size: number }[];
	config?: LayoutConfig;
}

const WordCloud = ({ wordsArray, config }: WordCloudProps) => {
	const sizeRef = useRef(null);

	const draw = (word: d3Cloud.Word) => {
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
			.data(word as d3Cloud.Word[])
			.enter()
			.append('text')
			.style('font-size', (d) => d.size + 'px')
			.style('font-family', config?.font || 'Helvetica')
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

	const size = useWindowSize({ w: 900, h: 600 });
	const layout = new Layout(size, wordsArray, draw, config || Layout.DEFAULT);

	useEffect(() => {
		removeCloud();
		layout.start();
	}, [size, wordsArray]);

	return (
		<div
			ref={sizeRef}
			id='cloud-wrapper'
			className='border w-full aspect-[1.5] max-w-[900px] max-h-[600px] mx-auto my-0'
		></div>
	);
};

export default WordCloud;
