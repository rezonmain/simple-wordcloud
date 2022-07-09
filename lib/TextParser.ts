import mammoth from 'mammoth';
import * as pdfjs from 'pdfjs-dist';

class TextParser {
	static readonly acceptedString =
		'.txt,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf';

	readonly supported = {
		docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
		txt: 'text/plain',
		pdf: 'application/pdf',
	};

	async getTextFromFile(f: Blob): Promise<String> {
		return new Promise(async (resolve, reject) => {
			try {
				switch (f.type) {
					case this.supported.docx:
						resolve(await this._parseDocx(f));
						break;
					case this.supported.txt:
						resolve(await this._parseTxt(f));
						break;
					case this.supported.pdf:
						resolve(await this._parsePdf(f));
						break;
					default:
						reject('Unsopported file');
						break;
				}
			} catch (err) {
				// FIXME: Just for debug
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
		return await f.text();
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
}

export default TextParser;
