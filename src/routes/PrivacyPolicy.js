import React from "react";
import GoBack from "../components/GoBack";

const PrivacyPolicy = () => {
	return (
		<div className="mt-10 px-3 font-poppins max-w-2xl mx-auto">
			<GoBack className="mb-3" />
			<header>
				<h1 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">
					Privacy Policy
				</h1>
			</header>
			<main>
				<h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
				<p className="text-md text-slate-500 mb-6">
					We collect personal information like emails to improve our services.
					The information is stored securely and is not shared with third
					parties.
				</p>

				<h2 className="text-2xl font-semibold mb-3">Use of Information</h2>
				<p className="text-md text-slate-500 mb-6">
					The information we collect is solely used for communication and
					improvement of our services. We do not sell or share your information
					with third parties.
				</p>

				<h2 className="text-2xl font-semibold mb-3">Cookies</h2>
				<p className="text-md text-slate-500 mb-6">
					We use cookies to enhance your experience on our website. Cookies are
					small data files that help us understand how you use our services and
					to improve it.
				</p>

				<h2 className="text-2xl font-semibold mb-3">Security</h2>
				<p className="text-md text-slate-500 mb-6">
					We implement a variety of security measures to maintain the safety of
					your personal information.
				</p>

				<h2 className="text-2xl font-semibold mb-3">Changes to This Policy</h2>
				<p className="text-md text-slate-500 mb-6">
					We may update our Privacy Policy from time to time. The updated policy
					will be effective as soon as it is published.
				</p>

				<h2 className="text-2xl font-semibold mb-3">Contact Information</h2>
				<p className="text-md text-slate-500 mb-6">
					For any questions about this Privacy Policy, please contact us at
					ahmed@gadirlabs.io.
				</p>
				<p className="text-sm text-slate-500 mb-6">
					Last updated: 15th September 2023
				</p>
			</main>
		</div>
	);
};

export default PrivacyPolicy;
