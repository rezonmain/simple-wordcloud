import mammoth from 'mammoth';
import * as pdfjs from 'pdfjs-dist';

class TextParser {
	static readonly acceptedStr =
		'.txt,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf';

	readonly supported = {
		docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
		txt: 'text/plain',
		pdf: 'application/pdf',
	};

	async getDataFromFile(file: Blob) {
		const words = await this.getWordsFromFile(file);
		const wordCount = this.countWordInstance(words);
		return Object.entries(wordCount).map((entry) => ({
			text: entry[0],
			size: entry[1],
		}));
	}

	// TODO: using default settings on stop words
	countWordInstance(
		text: string,
		options = { stopWords: false, lang: 'eng' }
	): { [name: string]: number } {
		let wordInstance: { [name: string]: number } = {};
		const { removeStopwords } = require('stopword');
		// TODO: Let user specify what to langauge use for stop words
		text = options.stopWords
			? text
			: removeStopwords(text.split(' ')).join(' ');

		text.split(' ').forEach((word) => {
			wordInstance[word] = wordInstance[word] ? ++wordInstance[word] : 1;
		});

		return wordInstance;
	}

	async getWordsFromFile(f: Blob, raw: boolean = false): Promise<string> {
		return new Promise(async (resolve, reject) => {
			try {
				switch (f.type) {
					case this.supported.docx:
						resolve(
							raw
								? await this._parseDocx(f)
								: this._trim(await this._parseDocx(f))
						);
						break;
					case this.supported.txt:
						resolve(
							raw
								? await this._parseTxt(f)
								: this._trim(await this._parseTxt(f))
						);
						break;
					case this.supported.pdf:
						resolve(
							raw
								? await this._parsePdf(f)
								: this._trim(await this._parsePdf(f))
						);
						break;
					default:
						reject('Unsupported file');
						break;
				}
			} catch (err) {
				reject('File unsupported or corrupted');
			}
		});
	}

	async _parseDocx(f: Blob) {
		const buffer = await f.arrayBuffer();
		const res = await mammoth.extractRawText({ arrayBuffer: buffer });
		return res.value;
	}

	async _parseTxt(f: Blob) {
		const text = await f.text();
		return text;
	}

	async _parsePdf(f: Blob) {
		const array = await f.arrayBuffer();
		const typedarray = new Uint8Array(array);
		pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
		const pdf = await pdfjs.getDocument({ data: typedarray }).promise;

		let promises: Promise<string>[] = [];
		for (let i = 1; i <= pdf.numPages; i++) {
			promises.push(this._getPdfPageText(pdf, i));
		}

		const text = await Promise.all(promises);
		return text.join(' ');
	}

	async _getPdfPageText(pdf: pdfjs.PDFDocumentProxy, pageNum: number) {
		const page = await pdf.getPage(pageNum);
		const tokenText = await page.getTextContent();
		// FIXME: Get correct type here (textItem.str)
		// @ts-ignore
		return tokenText.items.map((textItem) => textItem.str).join('');
	}

	_trim(text: string) {
		// Returns a space seperated string of alphabetic words or dashed words
		return (
			text
				/* Split words in anything that is NOT alphabetic or has contraction (')
        ex: "123hello" => "123", "hello" or "©nomad" => "©" "nomad" */
				.split(/[^a-z']/gi)
				/* Just keep alphabetic words, min length of 2 */
				.filter((word) => word.match(/[a-z']{2,}/gi))
				/* Trim whitespace around words, lowercase all words */
				.map((word) =>
					word
						.replace(/[^a-z]/gi, '')
						.trim()
						.toLowerCase()
				)
				/* Join everything into a space seperated string */
				.join(' ')
		);
	}
}

export default TextParser;
