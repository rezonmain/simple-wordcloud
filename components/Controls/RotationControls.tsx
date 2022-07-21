const RotationControls = () => {
	return (
		<fieldset>
			<label htmlFor='rotations'>Rotations:</label>
			<input
				min='1'
				max='100'
				onChange={onChange}
				name='rotations'
				type='number'
				value={values.rotations}
			></input>
			<label htmlFor='angleFrom'>
				From: {values.angleFrom}
				<sup>o</sup>
			</label>
			<input
				name='angleFrom'
				onChange={onChange}
				type='range'
				min='-90'
				max={values.angleTo}
				value={values.angleFrom}
			></input>

			<label htmlFor='angleTo'>To: {values.angleTo}</label>
			<input
				name='angleTo'
				onChange={onChange}
				type='range'
				min={values.angleFrom}
				max='90'
				value={values.angleTo}
			/>
		</fieldset>
	);
};

export default RotationControls;
