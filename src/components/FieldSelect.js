import React from "react";

const FieldSelect = props => {
	const { valueArr} = props;
	
	return (
		<select>
			{valueArr.map(elem => {
				return (
					<option key={elem} value={elem}>
						{elem}%
					</option>
				);
			})}
		</select>
	);
};

export default FieldSelect;
