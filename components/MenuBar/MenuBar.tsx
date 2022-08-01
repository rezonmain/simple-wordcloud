import {
	Menu,
	MenuButton,
	Button,
	MenuList,
	MenuItem,
	Flex,
	MenuDivider,
	PlacementWithLogical,
} from '@chakra-ui/react';
import { IoChevronForward } from 'react-icons/io5';
import { IoChevronDown } from 'react-icons/io5';

const MenuBar = ({ as }: { as: 'toolbar' | 'drawer' }) => {
	const buttonStylesProps = {
		color: '#f5f5f5',
		borderRadius: as === 'toolbar' ? undefined : '0',
		_hover: { backgroundColor: '#525252' },
		_active: { backgroundColor: '#525252' },
		backgroundColor: '#262626',
		fontSize: '1rem',
		h: as === 'toolbar' ? undefined : '3.5rem',
		as: Button,
		rightIcon:
			as === 'toolbar' ? (
				<IoChevronDown size={14} />
			) : (
				<IoChevronForward size={14} />
			),
	};

	const menuListStylesProps = {};

	const menuItemStylesProps = {
		color: '#262626',
		_hover: { backgroundColor: as === 'toolbar' ? '#e5e5e5' : '#d4d4d4' },
		_active: { backgroundColor: as === 'toolbar' ? '#e5e5e5' : '#d4d4d4' },
		_focus: { backgroundColor: 'inherit' },
	};

	const menuStyleProps = {
		isLazy: true,
		placement:
			as === 'toolbar' ? undefined : ('end-start' as PlacementWithLogical),
	};

	return (
		<Flex gap={'0.1rem'} direction={as === 'toolbar' ? 'row' : 'column'}>
			<Menu {...menuStyleProps}>
				<MenuButton {...buttonStylesProps}>File</MenuButton>
				<MenuList {...menuListStylesProps}>
					<MenuItem {...menuItemStylesProps}>Open cloud...</MenuItem>
					<MenuDivider />
					<MenuItem {...menuItemStylesProps}>Save...</MenuItem>
					<MenuItem {...menuItemStylesProps}>Save as...</MenuItem>
					<MenuItem {...menuItemStylesProps}>New cloud</MenuItem>
				</MenuList>
			</Menu>
			<Menu {...menuStyleProps}>
				<MenuButton {...buttonStylesProps}>Download</MenuButton>
				<MenuList {...menuListStylesProps}>
					<MenuItem {...menuItemStylesProps}>as SVG</MenuItem>
					<MenuItem {...menuItemStylesProps}>as JPEG</MenuItem>
					<MenuItem {...menuItemStylesProps}>as PNG</MenuItem>
				</MenuList>
			</Menu>
			<Menu {...menuStyleProps}>
				<MenuButton {...buttonStylesProps}>Adv. Options</MenuButton>
				<MenuList {...menuListStylesProps}>
					<MenuItem {...menuItemStylesProps}>Scaling method...</MenuItem>
					<MenuItem {...menuItemStylesProps}>Word spacing...</MenuItem>
				</MenuList>
			</Menu>
		</Flex>
	);
};
export default MenuBar;
