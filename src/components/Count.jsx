import React from "react";

export default function Count({ count }) {
	return (
		<div className="text-2xl font-semibold" id="counter">
			{count}
		</div>
	);
}
