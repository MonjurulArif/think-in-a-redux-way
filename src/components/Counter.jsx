import React, { useState } from "react";

export default function Counter() {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount((prevCount) => prevCount + 1);
	};

	const decrement = () => {
		setCount((prevCount) => prevCount - 1);
	};

	return (
		<div>
			<div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
				<div className="text-2xl font-semibold" id="counter">
					{count}
				</div>
				<div className="flex space-x-3">
					<button className="bg-indigo-400 text-white px-3 py-2 rounded shadow" id="increment" onClick={increment}>
						Increment
					</button>
					<button className="bg-red-400 text-white px-3 py-2 rounded shadow" id="decrement" onClick={decrement}>
						Decrement
					</button>
				</div>
			</div>
		</div>
	);
}