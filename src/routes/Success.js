import React from "react";

const Success = () => {
	return (
		<div className="mt-10 px-3 font-poppins mx-auto max-w-5xl text-center">
			<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-slate-900">
				Thank you for subscribing!
			</h2>
			<main>
				<p className="text-lg text-slate-500 mb-5">
					We'll send you an email when we launch. In the meantime here a fun
					video to watch.
				</p>
				<div className="inline-block">
					<a
						href="/"
						className="font-medium text-indigo-500 flex items-center space-x-1"
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
			</main>
		</div>
	);
};

export default Success;
