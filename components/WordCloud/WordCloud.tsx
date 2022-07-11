import * as d3 from 'd3';
import { useEffect } from 'react';

interface WordCloudProps {
	data: { word: string; value: number }[];
}

const WordCloud = ({ data }: WordCloudProps) => {
	useEffect(() => {
		d3.select('#cloud')
			.selectAll('text')
			.data(data)
			.enter()
			.append('text')
			.style('font-family', 'Roboto')
			.style('fill', '#000000')
			.style('font-size', (d) => d.value + 'px')
			.text((d) => d.word);
	}, [data]);

	return (
		<div id='cloud-wrapper'>
			<svg id='cloud'></svg>
		</div>
	);
};

export default WordCloud;
