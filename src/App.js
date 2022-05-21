import { useState } from "react";
import "./App.css";
// import Buttons from "./components/buttons/buttons";
// import Inputbox from "./components/input-box/input-box";

function App() {
	const [inputnum, setInputNum] = useState(0);
	const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	return (
		<div>
			<div>
				<h1>{inputnum}</h1>
				<div>
					{numbers.map((num) => {
						return (
							<button id={num} key={num} onClick={() => setInputNum(num)}>
								{num}
							</button>
						);
					})}
					<button id='reset-button' onClick={() => setInputNum(0)}>
						Reset
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;

