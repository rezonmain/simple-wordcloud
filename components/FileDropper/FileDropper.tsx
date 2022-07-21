import { ChangeEvent, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import TextParser from '../../lib/TextParser';

const FileDropper = ({
	handleChange,
}: {
	handleChange: (file: Blob) => void;
}) => {
	const onDrop = useCallback((acceptedFiles: File[]) => {
		handleChange(acceptedFiles[0]);
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
	return (
		<div {...getRootProps()}>
			<input {...getInputProps()} />
			{isDragActive ? (
				<p>Drop the files here ...</p>
			) : (
				<p>Drag 'n' drop some files here, or click to select files</p>
			)}
		</div>
	);
};

export default FileDropper;
