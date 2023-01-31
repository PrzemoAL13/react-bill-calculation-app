import React, { useState } from "react";

const FieldInput = props => {
	const { inputType, placeholderInfo, defaultValue } = props;
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = event => {
		setInputValue(event.target.value);
	};

	return (
		<div>
			<input
				type={inputType}
				placeholder={placeholderInfo}
				onChange={handleInputChange}
				defaultValue={defaultValue}>
			</input>
			{/* <p>{inputValue}</p> */}
		</div>
	);
};

export default FieldInput;
