import { MdOutlineUploadFile } from 'react-icons/md';

interface ButtonProps {
	text: string;
	type: 'action' | 'upload';
}

const Button = ({ text, type }: ButtonProps) => {
	return (
		<>
			{type === 'action' ? (
				<button className='button-base bg-neutral-800 text-neutral-100'>
					{text}
				</button>
			) : (
				<button className='button-base bg-neutral-300 text-neutral-800 flex flex-row items-center gap-1 px-4'>
					<MdOutlineUploadFile />
					{text}
				</button>
			)}
		</>
	);
};

export default Button;
