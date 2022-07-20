const FilterControls = () => {
return (
  <fieldset>
						<label htmlFor='includeStopWords'>Stop Words:</label>
						<input
							onChange={onChange}
							name='includeStopWords'
							type='checkbox'
							checked={values.includeStopWords}
						></input>
						<label htmlFor='includePronouns'>Pronouns</label>
						<input
							onChange={onChange}
							name='includePronouns'
							type='checkbox'
							checked={values.includePronouns}
						></input>
						<label htmlFor='lang'>Language:</label>
						<select onChange={onChange} name='lang' value={values.lang}>
							<option value='eng'>English</option>
							<option value='esp'>Spanish</option>
							<option value='fra'>French</option>
						</select>
					</fieldset>
)
}

export defualt FilterControls;