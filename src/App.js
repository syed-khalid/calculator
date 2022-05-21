import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons/buttons";

function App() {
	const [inputnum, setInputNum] = useState(0);
	const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	const inputSetter = (num) => {
		if (inputnum > 0) return setInputNum(inputnum * 10 + num);
		return setInputNum(num);
	};

	return (
		<div>
			<h1>{inputnum}</h1>
			<Buttons
				numbers={numbers}
				inputSetter={inputSetter}
				setInputNum={setInputNum}
			/>
			<div id='calculation-buttons'></div>
		</div>
	);
}

export default App;

