import React from "react";

const GoBack = (props) => {
	return (
		<div {...props}>
			<a
				href="/"
				className="font-medium text-indigo-500 hover:text-indigo-400 flex items-center space-x-1"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					className="w-7 h-7 inline-block"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<span className="text-md md:text-lg">Go back</span>
			</a>
		</div>
	);
};

export default GoBack;
