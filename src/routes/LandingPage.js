import React from "react";
import Form from "../components/Form";
import Footer from "../components/Footer";

import ArabyBuddyLogo from "../assets/arabybuddy.png";

const LandingPage = () => {
	return (
		<main className=" h-screen flex flex-col">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-3 flex items-center flex-1">
				<div className="mx-auto max-w-xl pb-28">
					<img
						src={ArabyBuddyLogo}
						alt="Araby Buddy Logo"
						className="mx-auto mb-6 w-52 sm:w-60 md:w-80 lg:w-96"
					/>
					<h1 className="font-poppins text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 text-slate-900">
						Learn arabic through stories & conversation
					</h1>
					<p className="text-slate-500 text-lg text-center mb-10">
						Join our newsletter to get notified when we launch. Don't worry, we
						don't spam. We only send emails when we have something to share.
					</p>
					<Form />
				</div>
			</div>
			<Footer />
		</main>
	);
};

export default LandingPage;
