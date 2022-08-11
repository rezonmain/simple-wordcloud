import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsFillArrowRightSquareFill, BsTrashFill } from 'react-icons/bs';

interface TableRowProps {
	id: string;
	name: string;
	date: string;
	onDelete: (id: string) => void;
	as: 'homepage' | 'modal';
}
const TableRow = ({ id, name, date, onDelete, as }: TableRowProps) => {
	const router = useRouter();
	return (
		<tr
			className={`border-b border-neutral-${
				as === 'modal' ? '400' : '800'
			} h-10`}
		>
			<td className='text-md px-4'>{name}</td>
			<td className='text-md'>{date}</td>
			<td width='8%'>
				<div id='table-icons' className='flex flex-row gap-4 px-4'>
					<BsTrashFill
						onClick={() => onDelete(id)}
						size={'27.2px'}
						className='control'
						color='#262626'
					/>
					<Link href={{ pathname: '/create', query: { id } }}>
						<a>
							<BsFillArrowRightSquareFill
								size={'27.2px'}
								className='control'
								color='#262626'
							/>
						</a>
					</Link>
				</div>
			</td>
		</tr>
	);
};

export default TableRow;
