import {
	Menu,
	MenuButton,
	Button,
	MenuList,
	MenuItem,
	Flex,
	MenuDivider,
} from '@chakra-ui/react';

import Link from 'next/link';
import { IoChevronDown } from 'react-icons/io5';
import MyDivider from '../Divider/Divider';

const ToolbarMenu = () => {
	const buttonStylesProps = {
		_hover: { backgroundColor: '#525252' },
		_active: { backgroundColor: '#525252' },
		color: '#f5f5f5',
		backgroundColor: '#262626',
		fontSize: '1rem',
		as: Button,
		rightIcon: <IoChevronDown size={14} />,
	};

	const menuListStylesProps = {};

	const menuItemStylesProps = {
		_hover: { backgroundColor: '#e5e5e5' },
		_active: { backgroundColor: '#e5e5e5' },
		_focus: { backgroundColor: 'inherit' },
	};
	return (
		<div className='hidden lg:flex font-serif text-neutral-800 flex-row items-center gap-6'>
			<Link href={'/'}>
				<a className=' ml-6'>
					<span className='block text-neutral-100 text-xl'>SWC</span>
					<MyDivider color='bg-neutral-100' />
				</a>
			</Link>
			<Flex gap={'0.1rem'}>
				<Menu isLazy={true}>
					<MenuButton {...buttonStylesProps}>File</MenuButton>
					<MenuList {...menuListStylesProps}>
						<MenuItem {...menuItemStylesProps}>Open cloud...</MenuItem>
						<MenuDivider />
						<MenuItem {...menuItemStylesProps}>Save...</MenuItem>
						<MenuItem {...menuItemStylesProps}>Save as...</MenuItem>
						<MenuItem {...menuItemStylesProps}>New cloud</MenuItem>
					</MenuList>
				</Menu>
				<Menu isLazy={true}>
					<MenuButton {...buttonStylesProps}>Download</MenuButton>
					<MenuList {...menuListStylesProps}>
						<MenuItem {...menuItemStylesProps}>as SVG</MenuItem>
						<MenuItem {...menuItemStylesProps}>as JPEG</MenuItem>
						<MenuItem {...menuItemStylesProps}>as PNG</MenuItem>
					</MenuList>
				</Menu>
				<Menu isLazy={true}>
					<MenuButton {...buttonStylesProps}>Adv. Options</MenuButton>
					<MenuList {...menuListStylesProps}>
						<MenuItem {...menuItemStylesProps}>Scaling method...</MenuItem>
						<MenuItem {...menuItemStylesProps}>Word spacing...</MenuItem>
					</MenuList>
				</Menu>
			</Flex>
		</div>
	);
};
export default ToolbarMenu;
