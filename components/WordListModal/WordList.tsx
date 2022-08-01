const WordList = ({ children }: { children: JSX.Element[] }) => {
	return (
		<table className='w-full'>
			<thead className='text-left'>
				<tr>
					<th className=' font-normal text-neutral-400'>No.</th>
					<th>Show</th>
					<th>Word</th>
					<th>Value</th>
				</tr>
			</thead>
			<tbody>{children}</tbody>
		</table>
	);
};

export default WordList;
