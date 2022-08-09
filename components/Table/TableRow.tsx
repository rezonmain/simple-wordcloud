import Link from 'next/link';
import { BsFillArrowRightSquareFill, BsTrashFill } from 'react-icons/bs';
import useDeleteCloud from '../../lib/hooks/useDeleteCloud';

interface TableRowProps {
	id: string;
	name: string;
	date: string;
	onDelete: (id: string) => void;
}
const TableRow = ({ id, name, date, onDelete }: TableRowProps) => {
	return (
		<tr className='border-b border-b-black h-10'>
			<td className='text-md px-4'>{name}</td>
			<td className='text-md'>{date}</td>
			<td width='8%'>
				<div id='table-icons' className='flex flex-row gap-4 px-4'>
					<BsTrashFill
						onClick={() => onDelete(id)}
						size={'1.7rem'}
						className='control'
						color='#262626'
					/>
					<Link href={{ pathname: '/create', query: { id } }}>
						<a>
							<BsFillArrowRightSquareFill
								size={'1.7rem'}
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
