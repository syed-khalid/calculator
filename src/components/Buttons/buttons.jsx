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
			<button id='reset-button' onClick={() => setInputNum(0)}>
				Reset
			</button>
		</div>
	);
};

export default Buttons;
