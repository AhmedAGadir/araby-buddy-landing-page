import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<div id="error-page" className="mt-10 font-poppins text-center">
			<h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-600">
				404 Error
			</h1>
			<p className="text-gray-500 text-lg font-light">
				Aasif, an unexpected error has occurred.
			</p>
			<p className="text-gray-500 text-lg font-light">
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
}
