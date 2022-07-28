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
	Stack,
} from '@chakra-ui/react';
import { IoChevronDownSharp } from 'react-icons/io5';
import MyDivider from '../Divider/Divider';
import Footer from '../Footer/Footer';

const SideBar = ({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}) => {
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

					<DrawerBody fontFamily={'Maitree'}>
						<Stack spacing={'1rem'}>
							<Menu>
								<MenuButton
									as={Button}
									rightIcon={<IoChevronDownSharp size={14} />}
								>
									File
								</MenuButton>
								<MenuList>
									<MenuItem>Save...</MenuItem>
									<MenuItem>Save as...</MenuItem>
									<MenuItem>New cloud</MenuItem>
								</MenuList>
							</Menu>
							<Menu>
								<MenuButton
									as={Button}
									rightIcon={<IoChevronDownSharp size={14} />}
								>
									Download
								</MenuButton>
								<MenuList>
									<MenuItem>as SVG</MenuItem>
									<MenuItem>as JPEG</MenuItem>
									<MenuItem>as PNG</MenuItem>
								</MenuList>
							</Menu>
							<Menu>
								<MenuButton
									as={Button}
									rightIcon={<IoChevronDownSharp size={14} />}
								>
									Adv. Options
								</MenuButton>
								<MenuList>
									<MenuItem>Word scaling...</MenuItem>
									<MenuItem>Word spacing...</MenuItem>
								</MenuList>
							</Menu>
						</Stack>
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
