import React from "react";

const FieldInput = props => {
	const { inputType, placeholderInfo} = props;
	return (
		
			<input type={inputType} placeholder={placeholderInfo} ></input>
		
	);
};

export default FieldInput;
