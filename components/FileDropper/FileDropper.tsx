import { ChangeEvent } from 'react';
import TextParser from '../../lib/TextParser';

const FileDropper = ({
	handleChange,
}: {
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
	return (
		<>
			<form>
				<input
					type='file'
					accept={TextParser.acceptedStr}
					onChange={handleChange}
				/>
			</form>
		</>
	);
};

export default FileDropper;
