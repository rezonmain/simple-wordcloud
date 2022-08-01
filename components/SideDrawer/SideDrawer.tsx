import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
} from '@chakra-ui/react';
import Link from 'next/link';
import MyDivider from '../Divider/Divider';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';

const SideDrawer = ({
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
					<DrawerHeader paddingLeft={'0.5rem'}>
						<div className='text-neutral-100 font-serif text-2xl'>
							<Link href={'/'}>
								<a>
									<span className='block'>SWC</span>
								</a>
							</Link>

							<MyDivider color='bg-neutral-100' />
						</div>
					</DrawerHeader>
					<DrawerBody fontFamily={'Maitree'} p={0}>
						<MenuBar as='drawer' />
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

export default SideDrawer;
