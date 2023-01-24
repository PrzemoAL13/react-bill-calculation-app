import "./App.css";

function App() {
	return (
		<div className='App'>
				<h1>Bill calculator!</h1>
				<p>Calculate your bill!</p>
				<form>
					<div>
						<p>Price</p>
						<input type='number' placeholder='Set price...'></input>
					</div>
					<div>
						<p>Tip</p>
						<input type='number' placeholder='Set tip...'></input>
					</div>
					<div>
						<p>Tax</p>
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
