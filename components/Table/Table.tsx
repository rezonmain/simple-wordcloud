import { BsPlusCircleFill } from 'react-icons/bs';
import { SavedCloud } from '../../lib/types';
import TableRow from './TableRow';
import Link from 'next/link';

const Table = ({ savedClouds }: { savedClouds: SavedCloud[] }) => {
	const rows = savedClouds.map((cloud) => {
		return (
			<TableRow key={cloud.id} name={cloud.name} date={prettyDate(cloud.ts)} />
		);
	});
	return (
		<div
			id='table'
			className='font-serif w-full flex flex-col border border-black max-h-80 rounded-lg'
		>
			<table>
				<thead className='bg-neutral-800 text-neutral-100 text-lg '>
					<tr>
						<th colSpan={3} className='font-normal p-2 rounded-t-lg'>
							Your previous word clouds
						</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
			<div id='add-icon' className='flex justify-end p-4'>
				<Link href={'/create'}>
					<div>
						<BsPlusCircleFill
							size={'2.25rem'}
							className='control'
							color='#262626'
						/>
					</div>
				</Link>
			</div>
		</div>
	);
};
export default Table;

const prettyDate = (ts: number) => {
	const date = new Date(ts);
	const shortMonthName = new Intl.DateTimeFormat('en-US', { month: 'short' })
		.format;
	const m = shortMonthName(date);
	const d = date.getDate();
	const y = date.getFullYear();
	const hr = date.getHours();
	const min = date.getMinutes();
	const s = date.getSeconds();
	return `${m} ${d} ${y} ${hr}:${min}:${s}`;
};
