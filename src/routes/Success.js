import React from "react";
// import GoBack from "../components/GoBack";

const Success = () => {
	return (
		<div className="font-poppins mx-auto max-w-5xl text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
			<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-slate-900">
				Thanks for subscribing! 🎉
			</h1>
			<main>
				<p className="text-lg text-slate-500 mb-5">
					We'll email you when we launch.
					{/* In the meantime here a fun video to watch. */}
				</p>
				{/* <GoBack className="inline-block" /> */}
			</main>
		</div>
	);
};

export default Success;
