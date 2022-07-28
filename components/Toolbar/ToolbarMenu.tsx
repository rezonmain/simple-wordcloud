import {
	Menu,
	MenuButton,
	Button,
	MenuList,
	MenuItem,
	Flex,
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

	const menuListStylesProps = {
		bg: '#f5f5f5',
	};

	const menuItemStylesProps = {
		_hover: { backgroundColor: '#d4d4d4' },
		_active: { backgroundColor: '#d4d4d4' },
		_focus: { backgroundColor: 'inherit' },
	};
	return (
		<div className='hidden lg:flex font-serif text-neutral-800 flex-row items-center gap-4'>
			<Link href={'/'}>
				<a>
					<span className='block text-neutral-100'>SWC</span>
					<MyDivider color='bg-neutral-100' />
				</a>
			</Link>
			<Flex gap={'0.1rem'}>
				<Menu isLazy={true}>
					<MenuButton {...buttonStylesProps}>File</MenuButton>
					<MenuList {...menuListStylesProps}>
						<MenuItem {...menuItemStylesProps}>Save...</MenuItem>
						<MenuItem {...menuItemStylesProps}>Save as...</MenuItem>
						<MenuItem {...menuItemStylesProps}>New cloud</MenuItem>
					</MenuList>
				</Menu>
				<Menu isLazy={true}>
					<MenuButton {...buttonStylesProps}>Download</MenuButton>
					<MenuList>
						<MenuItem {...menuItemStylesProps}>as SVG</MenuItem>
						<MenuItem {...menuItemStylesProps}>as JPEG</MenuItem>
						<MenuItem {...menuItemStylesProps}>as PNG</MenuItem>
					</MenuList>
				</Menu>
				<Menu isLazy={true}>
					<MenuButton {...buttonStylesProps}>Adv. Options</MenuButton>
					<MenuList>
						<MenuItem {...menuItemStylesProps}>Word scaling...</MenuItem>
						<MenuItem {...menuItemStylesProps}>Word spacing...</MenuItem>
					</MenuList>
				</Menu>
			</Flex>
		</div>
	);
};
export default ToolbarMenu;
