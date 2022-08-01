import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { BsCloudUpload } from 'react-icons/bs';

/*TODO: 
	[x] Style component
	[ ] Interface error handling
 */

const FileDropper = ({ onFile }: { onFile: (file: Blob) => void }) => {
	const onDrop = useCallback(
		(acceptedFiles: File[]) => {
			onFile(acceptedFiles[0]);
		},
		[onFile]
	);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
	return (
		<div
			className={`cursor-pointer rounded-lg border-dashed mx-auto flex items-center justify-center p-2 font-serif text-lg transition-colors h-[180px] ${
				isDragActive
					? 'bg-neutral-100 text-neutral-800'
					: 'bg-neutral-800 text-neutral-100'
			}`}
			{...getRootProps()}
		>
			<input {...getInputProps()} />
			<div className=' max-w-[30ch] text-center flex flex-col items-center'>
				<BsCloudUpload size={'2.5rem'} />
				{isDragActive ? 'Let go!' : 'Drop file here, or tap to browse.'}
			</div>
		</div>
	);
};

export default FileDropper;
