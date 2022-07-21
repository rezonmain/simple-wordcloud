import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

/*TODO: 
	[ ] Style component
	[ ] Interface error handling
 */

const FileDropper = ({ onFile }: { onFile: (file: Blob) => void }) => {
	const onDrop = useCallback((acceptedFiles: File[]) => {
		onFile(acceptedFiles[0]);
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
	return (
		<div
			className='border-4 border-gray-400 bg-gray-200 border-dashed w-screen h-[100vw] max-w-[700px] max-h-[700px] mx-auto flex items-center justify-center p-2'
			{...getRootProps()}
		>
			<input {...getInputProps()} />
			<div>{'Drop your file here (.pdf, .txt, .docx).'}</div>
		</div>
	);
};

export default FileDropper;
