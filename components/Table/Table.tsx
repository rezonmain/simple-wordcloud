import { BsPlusCircleFill } from 'react-icons/bs';
import { SavedCloud } from '../../lib/types';
import TableRow from './TableRow';
const Table = ({ savedClouds }: { savedClouds: SavedCloud[] }) => {
	const rows = savedClouds.map((cloud) => {
		return <TableRow name={cloud.name} date={prettyDate(cloud.ts)} />;
	});
	return (
		<div className='font-serif w-full flex flex-col border border-black max-h-80'>
			<table>
				<thead className='bg-neutral-800 text-neutral-100'>
					<tr>
						<th colSpan={3} className='font-normal'>
							Your previous word clouds
						</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
			<div id='add-icon' className='flex justify-end p-4'>
				<BsPlusCircleFill size={'2.25rem'} />
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
