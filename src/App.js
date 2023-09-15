import React from "react";
import LandingPage from "./routes/LandingPage";
import ErrorPage from "./routes/ErrorPage";
import PrivacyPolicy from "./routes/PrivacyPolicy";
import TermsAndConditions from "./routes/TermsAndConditions";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <LandingPage />,
			errorElement: <ErrorPage />,
		},
		{
			path: "/privacy-policy",
			element: <PrivacyPolicy />,
		},
		{
			path: "/terms-and-conditions",
			element: <TermsAndConditions />,
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
