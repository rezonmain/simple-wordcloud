class FontPreloader {
	/* JANK WARNING, this is used to preload web fonts, if this is not done,
		the wordcloud renders with a fallback font until the font is loaded */
	fonts: String[];
	constructor() {
		const fontLoaderElements = document.getElementsByClassName('font-loader');
		this.fonts = ['Roboto', 'Roboto Mono', 'Anton', 'Kalam'];

		if (fontLoaderElements.length <= 0) {
			const footer = document.querySelector('footer');
			this.fonts.forEach((font) => {
				const p = document.createElement('p');
				p.setAttribute(
					'style',
					`font-family: ${font}; font-size: 1px; color: #262626; position: absolute`
				);
				p.className = 'font-loader';
				p.innerText = 'o';
				footer?.appendChild(p);
			});
		}
	}
}
export default FontPreloader;
