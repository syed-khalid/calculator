import * as React from "react";
import IconButton from "@mui/material/IconButton";
import BackspaceIcon from "@mui/icons-material/Backspace";
const Buttons = ({ numbers, inputSetter, setInputNum }) => {
	return (
		<div>
			{numbers.map((num) => {
				return (
					<button id={num} key={num} onClick={() => inputSetter(num)}>
						{num}
					</button>
				);
			})}
			<IconButton
				aria-label='delete'
				id='reset-button'
				onClick={() => setInputNum(0)}>
				<BackspaceIcon />
			</IconButton>
		</div>
	);
};

export default Buttons;
