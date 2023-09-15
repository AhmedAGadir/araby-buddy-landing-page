import React from "react";
import ArabyBuddyLogo from "../assets/arabybuddy.png";

const TermsAndConditions = () => {
	return (
		<div className="mt-6 px-3 font-poppins max-w-2xl mx-auto">
			<header className="">
				<div>
					<a href="/">
						<img
							src={ArabyBuddyLogo}
							className="w-16 h-16 mb-3"
							aria-label="Go back"
						/>
					</a>
				</div>
				<h1 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">
					Terms and Conditions
				</h1>
			</header>
			<main>
				<p className="text-md text-slate-500 mb-6">
					These Terms and Conditions govern your use of our website located at
					ArabyBuddy.com and form a legally binding contract between you, the
					user of the website, and ArabyBuddy, the owner of the website.
				</p>
				<p className="text-md text-slate-500 mb-6">
					By using our platform, you agree to comply with and be bound by these
					Terms and Conditions.
				</p>
				<p className="text-md text-slate-500 mb-6">
					If you disagree with any part of these Terms and Conditions, then you
					may not access our services.
				</p>
				<h2 className="text-2xl font-semibold mb-3">
					Registration and User Accounts
				</h2>
				<p className="text-md text-slate-500 mb-6">
					To use some parts of our services, you may need to register for a user
					account. You must provide accurate and current information during the
					registration process and keep such information updated.
				</p>
				<h2 className="text-2xl font-semibold mb-3">
					Collection of Personal Information
				</h2>
				<p className="text-md text-slate-500 mb-6">
					We collect personal information like emails to improve our services.
					For more information, please read our Privacy Policy.
				</p>
				<h2 className="text-2xl font-semibold mb-3">Use of the Service</h2>
				<p className="text-md text-slate-500 mb-6">
					ArabyBuddy provides an online platform for Arabic language learning.
					Your use of the content provided is for your personal and
					non-commercial use only.
				</p>

				<h2 className="text-2xl font-semibold mb-3">Limitation of Liability</h2>
				<p className="text-md text-slate-500 mb-6">
					To the maximum extent permitted by law, ArabyBuddy shall not be liable
					for any indirect, incidental, special, consequential, or punitive
					damages, or any loss of profits or revenues, whether incurred directly
					or indirectly, due to your use of the website or services.
				</p>
				<h2 className="text-2xl font-semibold mb-3">
					Changes to the Terms and Conditions
				</h2>
				<p className="text-md text-slate-500 mb-6">
					We may revise these Terms and Conditions from time to time. The
					revised version will be effective as of the published effective date.
				</p>
				<h2 className="text-2xl font-semibold mb-3">Governing Law </h2>
				<p className="text-md text-slate-500 mb-6">
					These Terms and Conditions are governed by and construed in accordance
					with the laws of the jurisdiction in which ArabyBuddy operates.
				</p>
				<h2 className="text-2xl font-semibold mb-3">Contact Information</h2>
				<p className="text-md text-slate-500 mb-6">
					For any questions about these Terms and Conditions, please contact us
					at ahmed@gadirlabs.io.
				</p>
				<p className="text-sm text-slate-500 mb-6">
					Last Updated: 15th September 2023
				</p>
			</main>
		</div>
	);
};

export default TermsAndConditions;
