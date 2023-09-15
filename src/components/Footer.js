export default function Footer() {
	return (
		<footer className="pb-4 md:pb-6 font-poppins">
			<div className="border-t border-grey/10 flex justify-between pt-4 px-3 lg:px-8">
				<p className="text-xs leading-5 text-gray-500 font-light">
					&copy; 2023 Gadir Tech Ltd. All rights reserved.
				</p>

				<div className="flex items-center space-x-4">
					<a
						href="/privacy-policy"
						className="text-xs leading-5 text-gray-500 font-light hover:text-gray-900"
					>
						Privacy Policy
					</a>
					<a
						href="/terms-and-conditions"
						className="text-xs leading-5 text-gray-500 font-light hover:text-gray-900"
					>
						Terms &amp; Conditions
					</a>
				</div>
			</div>
		</footer>
	);
}
