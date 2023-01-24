import "./App.css";

import FieldParagraph from "./components/FieldParagraph";

function App() {
	return (
		<div className='App'>
			<h1>Bill calculator!</h1>
			<FieldParagraph textParagraph='Calculate your bill!' />

			<form>
				<div>
					<FieldParagraph textParagraph='Price' />
					<input type='number' placeholder='Set price...'></input>
				</div>
				<div>
					<FieldParagraph textParagraph='Tip' />
					<input type='number' placeholder='Set tip...'></input>
				</div>
				<div>
					<FieldParagraph textParagraph='Tax' />
					<select>
						<option value='5'>5%</option>
						<option value='8'>8%</option>
						<option selected value='23%'>
							23%
						</option>
					</select>
				</div>
				<div>
					<button>Calculate</button>
				</div>
			</form>
		</div>
	);
}

export default App;
