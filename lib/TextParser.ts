import mammoth from 'mammoth';
import * as pdfjs from 'pdfjs-dist';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

class TextParser {
	readonly supported = {
		docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
		txt: 'text/plain',
		pdf: 'application/pdf',
	};

	async getTextFromFile(f: Blob): Promise<String> {
		return new Promise(async (resolve, reject) => {
			try {
				console.log(f.type);
				switch (f.type) {
					case this.supported.docx:
						resolve(await this._parseDocx(f));
					case this.supported.txt:
						resolve(await this._parseTxt(f));
					case this.supported.pdf:
						resolve(await this._parsePdf(f));
					default:
						reject('Unsopported file');
				}
			} catch (err) {
				console.log(err);
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
		// @ts-ignore
		return tokenText.items.map((textItem) => textItem.str).join('');
	}
}

export default TextParser;
