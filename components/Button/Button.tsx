import { MdOutlineUploadFile } from 'react-icons/md';
import React, { LegacyRef } from 'react';

interface ButtonProp {
	onClick?: () => void;
	href?: any;
	type: string;
	text: string;
}

const Button = React.forwardRef(
	({ onClick, href, type, text }: ButtonProp, ref) => {
		return (
			<a
				onClick={onClick}
				href={href}
				ref={ref as LegacyRef<HTMLAnchorElement>}
			>
				{type === 'action' ? (
					<button className='button-base control bg-neutral-800 text-neutral-100'>
						{text}
					</button>
				) : (
					<button className='button-base control bg-neutral-300 text-neutral-800 flex flex-row items-center gap-1 px-4'>
						<MdOutlineUploadFile />
						{text}
					</button>
				)}
			</a>
		);
	}
);

export default Button;
