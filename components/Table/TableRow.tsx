import { BsFillArrowRightSquareFill, BsTrashFill } from 'react-icons/bs';

interface TableRowProps {
	id?: string;
	name: string;
	date: string;
}
const TableRow = ({ id, name, date }: TableRowProps) => {
	return (
		<tr className='border-b border-b-black h-10'>
			<td className='text-sm'>{name}</td>
			<td className='text-sm'>{date}</td>
			<td width='8%'>
				<div id='table-icons' className='flex flex-row gap-4 px-2'>
					<BsTrashFill size={'1.7rem'} className='control' />
					<BsFillArrowRightSquareFill size={'1.7rem'} className='control' />
				</div>
			</td>
		</tr>
	);
};

export default TableRow;
