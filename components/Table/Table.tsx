const Table = () => {
	return (
		<table className='font-serif w-full'>
			<thead className='bg-neutral-800 text-neutral-100'>
				<tr>
					<th colSpan={2} className='font-normal'>
						Your previous word clouds
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>One</td>
					<td>Two</td>
				</tr>
			</tbody>
		</table>
	);
};
export default Table;
