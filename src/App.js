import "./App.css";

import FieldParagraph from "./components/FieldParagraph";
import FieldInput from "./components/FieldInput";
import FieldSelect from "./components/FieldSelect";

function App() {
	const arrTip = [5, 10, 15, 20, 25];
	const arrTax = [5, 8, 23];
	const arrTipDefaultElem = 1;
	const arrTaxDefaultElem = 2;

	return (
		<div className='App'>
			<div className='Container'>
				<h1 className='Header'>Bill calculator!</h1>
				<h4 className='Header'>Calculate your bill! </h4>

				<form>
					<div className='FormElemContainer'>
						<FieldParagraph textParagraph='Price' />
						<FieldInput
							inputType='number'
							placeholderInfo='Set price...'
							defaultValue=''
						/>
					</div>
					<div className='FormElemContainer'>
						<FieldParagraph textParagraph='Tip' />
						<FieldSelect valueArr={arrTip} defaultValue={arrTipDefaultElem} />
					</div>
					<div className='FormElemContainer'>
						<FieldParagraph textParagraph='Tax' />
						<FieldSelect valueArr={arrTax} defaultValue={arrTaxDefaultElem} />
					</div>
					<div className='FormElemContainer'>
						<button className='CalculateButton'>Calculate</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default App;
