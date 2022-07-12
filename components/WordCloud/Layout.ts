import d3Cloud from 'd3-cloud';

const getLayout = (
	config: { w: number; h: number; font: string; limit: number },
	words: { text: string; size: number }[],
	handler: (draw: d3Cloud.Word) => void
) => {
	words = limit(words, config.limit);
	console.log(words);
	return (
		d3Cloud()
			.size([config.w, config.h])
			.words(words)
			.padding(1)
			// 0 or 90
			.rotate(() => Math.floor(Math.random() * 2) * 90)
			.font('Impact')
			// @ts-ignore
			.fontSize((d) => d.size)
			.on('end', handler)
	);
};

const limit = (words: { text: string; size: number }[], limit: number) => {
	// Sort so bigger words show on cloud, slice to limit
	return words.sort((a, b) => b.size - a.size).slice(0, limit);
};

const getRange = (
	w: number,
	h: number,
	words: { text: string; size: number }[]
) => {};

export default getLayout;
