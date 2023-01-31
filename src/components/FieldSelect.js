import React, { useState } from "react";

const FieldSelect = props => {
	const { valueArr, defaultValue } = props;
	const [selectValue, setSelectValue] = useState("");
	let localDefaultValue =
		defaultValue < 0 || defaultValue > valueArr.length ? 0 : defaultValue;
	const handleSelectChange = event => {
		setSelectValue(event.target.value);
	};
	return (
		<select
			defaultValue={valueArr[localDefaultValue]}
			onChange={handleSelectChange}>
			{valueArr.map(elem => {
				return (
					<option key={elem.toString()} value={elem}>
						{elem}%
					</option>
				);
			})}
		</select>
	);
};

export default FieldSelect;
