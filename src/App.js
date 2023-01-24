import "./App.css";

import FieldParagraph from "./components/FieldParagraph";
import FieldInput from "./components/FieldInput";
import FieldSelect from "./components/FieldSelect";

function App() {
	const arrTip = [5, 10, 15, 20, 25];
	const arrTax = [5, 8, 23];
	return (
		<div className='App'>
			<h1>Bill calculator!</h1>
			<FieldParagraph textParagraph='Calculate your bill!' />
			<form>
				<div>
					<FieldParagraph textParagraph='Price' />
					<FieldInput inputType='number' placeholderInfo='Set price...' />
				</div>
				<div>
					<FieldParagraph textParagraph='Tip' />
					<FieldSelect valueArr={arrTip} />
				</div>
				<div>
					<FieldParagraph textParagraph='Tax' />
					<FieldSelect valueArr={arrTax} />
				</div>
				<div>
					<button>Calculate</button>
				</div>
			</form>
		</div>
	);
}

export default App;
