import React from "react";
import "./componentsStyles.css";


const FieldParagraph = props => {
	const { textParagraph } = props;
	return <p className="Paragraph">{textParagraph}</p>;
};

export default FieldParagraph;
