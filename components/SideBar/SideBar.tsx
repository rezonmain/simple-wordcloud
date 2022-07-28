import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Menu,
	MenuButton,
	Button,
	MenuList,
	MenuItem,
	Flex,
	Divider,
} from '@chakra-ui/react';
import { IoChevronForward } from 'react-icons/io5';
import MyDivider from '../Divider/Divider';
import Footer from '../Footer/Footer';

const SideBar = ({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}) => {
	const buttonStylesProps = {
		color: '#f5f5f5',
		borderRadius: '0',
		_hover: { backgroundColor: '#525252' },
		_active: { backgroundColor: '#525252' },
		h: '3.5rem',
		bg: '#262626',
		as: Button,
		rightIcon: <IoChevronForward size={14} />,
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
		<aside>
			<Drawer isOpen={isOpen} onClose={onClose} placement={'left'} size={'xxs'}>
				<DrawerOverlay />
				<DrawerContent bg={'#262626'}>
					<DrawerCloseButton color={'#f5f5f5'} />
					<DrawerHeader>
						<div className='text-neutral-100 font-serif text-2xl'>
							<span className='block'>SWC</span>
							<MyDivider color='bg-neutral-100' />
						</div>
					</DrawerHeader>

					<DrawerBody fontFamily={'Maitree'} p={0}>
						<Flex direction={'column'}>
							<Menu isLazy={true} placement={'end-start'}>
								<MenuButton {...buttonStylesProps}>File</MenuButton>
								<MenuList {...menuListStylesProps}>
									<MenuItem {...menuItemStylesProps}>Save...</MenuItem>
									<MenuItem {...menuItemStylesProps}>Save as...</MenuItem>
									<MenuItem {...menuItemStylesProps}>New cloud</MenuItem>
								</MenuList>
							</Menu>
							<Divider />
							<Menu isLazy={true} placement={'end-start'}>
								<MenuButton {...buttonStylesProps}>Download</MenuButton>
								<MenuList>
									<MenuItem {...menuItemStylesProps}>as SVG</MenuItem>
									<MenuItem {...menuItemStylesProps}>as JPEG</MenuItem>
									<MenuItem {...menuItemStylesProps}>as PNG</MenuItem>
								</MenuList>
							</Menu>
							<Divider />
							<Menu isLazy={true} placement={'end-start'}>
								<MenuButton {...buttonStylesProps}>Adv. Options</MenuButton>
								<MenuList>
									<MenuItem {...menuItemStylesProps}>Word scaling...</MenuItem>
									<MenuItem {...menuItemStylesProps}>Word spacing...</MenuItem>
								</MenuList>
							</Menu>
						</Flex>
					</DrawerBody>
					<DrawerFooter>
						<div className='w-full'>
							<Footer />
						</div>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</aside>
	);
};

export default SideBar;
