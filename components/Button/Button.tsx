import { BsFileEarmarkArrowUp } from 'react-icons/bs';
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
					<button className='button-base control bg-neutral-800 text-neutral-100 text-2xl'>
						{text}
					</button>
				) : type === 'upload' ? (
					<button className='button-base control bg-neutral-300 text-neutral-800 text-2xl flex flex-row items-center gap-2 px-4'>
						<BsFileEarmarkArrowUp />
						{text}
					</button>
				) : (
					<button className='button-base control bg-neutral-800 text-neutral-100 text-lg px-3'>
						{text}
					</button>
				)}
			</a>
		);
	}
);

export default Button;
