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
import { MouseEvent } from 'react';
import { IoChevronForward } from 'react-icons/io5';
import { IoChevronDown } from 'react-icons/io5';
import { useLocalStorage } from 'react-use';
import Downloader from '../../lib/classes/Downloader';
import { useCloudContext } from '../../lib/context/CloudContext';
import useSaveCloud from '../../lib/hooks/useSaveCloud';

const MenuBar = ({ as }: { as: 'toolbar' | 'drawer' }) => {
	const {
		cloud: { title },
		cloud,
	} = useCloudContext();

	const saveCloud = useSaveCloud(cloud);

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

	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		const d = new Downloader();
		switch (e.currentTarget.name) {
			case 'save':
				saveCloud();
				break;
			case 'svg':
				d.asSVG(title);
				break;
			case 'png':
				d.asPNG(title);
				break;
			case 'jpg':
				d.asJPG(title);
				break;
		}
	};

	return (
		<Flex gap={'0.1rem'} direction={as === 'toolbar' ? 'row' : 'column'}>
			<Menu {...menuStyleProps}>
				<MenuButton {...buttonStylesProps}>File</MenuButton>
				<MenuList>
					<MenuItem
						name='openCloud'
						{...menuItemStylesProps}
						onClick={(e) => handleClick(e)}
					>
						Open cloud...
					</MenuItem>
					<MenuDivider />
					<MenuItem
						name='save'
						{...menuItemStylesProps}
						onClick={(e) => handleClick(e)}
					>
						Save...
					</MenuItem>
					<MenuItem
						name='saveAs'
						{...menuItemStylesProps}
						onClick={(e) => handleClick(e)}
					>
						Save as...
					</MenuItem>
					<MenuItem
						name='newCloud'
						{...menuItemStylesProps}
						onClick={(e) => handleClick(e)}
					>
						New cloud
					</MenuItem>
				</MenuList>
			</Menu>
			<Menu {...menuStyleProps}>
				<MenuButton {...buttonStylesProps}>Download</MenuButton>
				<MenuList>
					<MenuItem
						name='svg'
						{...menuItemStylesProps}
						onClick={(e) => handleClick(e)}
					>
						as SVG
					</MenuItem>
					<MenuItem
						name='png'
						{...menuItemStylesProps}
						onClick={(e) => handleClick(e)}
					>
						as PNG
					</MenuItem>
					<MenuItem
						name='jpg'
						{...menuItemStylesProps}
						onClick={(e) => handleClick(e)}
					>
						as JPG
					</MenuItem>
				</MenuList>
			</Menu>
			<Menu {...menuStyleProps}>
				<MenuButton {...buttonStylesProps}>Adv. Options</MenuButton>
				<MenuList>
					<MenuItem
						name='scalingMethod'
						{...menuItemStylesProps}
						onClick={(e) => handleClick(e)}
					>
						Scaling method...
					</MenuItem>
					<MenuItem
						name='wordSpacing'
						{...menuItemStylesProps}
						onClick={(e) => handleClick(e)}
					>
						Word spacing...
					</MenuItem>
				</MenuList>
			</Menu>
		</Flex>
	);
};
export default MenuBar;
