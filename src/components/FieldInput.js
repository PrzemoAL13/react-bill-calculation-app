import React from "react";

const FieldInput = props => {
	const { inputType, placeholderInfo} = props;
	return (
		<div>
			<input type={inputType} placeholder={placeholderInfo} ></input>
		</div>
	);
};

export default FieldInput;
