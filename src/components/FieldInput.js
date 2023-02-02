import React, { useState } from "react";
import styled from "styled-components";

import "./componentsStyles.css";

const InputStyle = styled.input`
	background-color: #dfe0df;
	color: #2f4858;
`;

const FieldInput = props => {
	const { inputType, placeholderInfo, defaultValue } = props;
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = event => {
		setInputValue(event.target.value);
	};

	return (
		<div>
			<InputStyle
				className='inputNumerical'
				type={inputType}
				placeholder={placeholderInfo}
				onChange={handleInputChange}
				defaultValue={defaultValue}></InputStyle>
		</div>
	);
};

export default FieldInput;
