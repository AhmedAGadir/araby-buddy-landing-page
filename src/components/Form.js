import React, { useState } from "react";
// import axios from "axios";

// const defaultStatus = { status: "", message: "" };

function Form() {
	const [value, setValue] = useState("");
	// const [status, setStatus] = useState({ ...defaultStatus });

	const submit = (e) => {
		// e.preventDefault();
		// if (!value) return;
		// setStatus({ ...defaultStatus });
		// const url =
		// 	process.env.NODE_ENV === "development"
		// 		? process.env.REACT_APP_DEV_NETLIFY_SERVERLESS_ENDPOINT
		// 		: "";
		// axios
		// 	.post(`${url}/.netlify/functions/subscribe`, { email: value })
		// 	.then((response) => {
		// 		if (response.status === 200) {
		// 			return response.data;
		// 		} else {
		// 			throw new Error("Something went wrong...");
		// 		}
		// 	})
		// 	.then((data) => {
		// 		setStatus({ status: "SUCCESS", message: data.message });
		// 		setValue("");
		// 	})
		// 	.catch((error) => {
		// 		setStatus({
		// 			status: "ERROR",
		// 			message: error.message,
		// 		});
		// 		console.log(error);
		// 	});
	};

	// console.log("status", status);

	return (
		<>
			<form
				className="sm:flex sm:justify-center sm:items-center sm:space-x-4 mt-4 mb-4 relative"
				onSubmit={submit}
				method="POST"
				action="src/routes/success"
				name="subscribe"
			>
				<input type="hidden" name="form-name" value="subscribe" />
				<div hidden>
					<input name="bot-field" />
				</div>
				<div className="relative flex-1">
					<div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
						<svg
							className="w-5 h-5 text-gray-500 dark:text-gray-400"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 16"
						>
							<path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
							<path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
						</svg>
					</div>
					<input
						type="email"
						name="email"
						id="email"
						required
						className="font-poppins font-light pl-12 shadow-md shadow-blue-500/50 block w-full rounded-xl border-0 px-4 py-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus-visible:outline focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm sm:text-md  md:text-lg sm:leading-6"
						placeholder="Enter your email"
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
				</div>

				<button
					onClick={submit}
					type="submit"
					className="font-poppins font-medium shadow-lg text-white bg-gradient-to-br from-purple-600 to-blue-500 px-6 py-4 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  rounded-lg text-sm sm:text-md md:text-lg text-center mt-4 w-full sm:w-auto sm:mt-0"
				>
					Subscribe
				</button>
				{/* {status.status === "SUCCESS" && (
					<p className="text-green-500 text-center mt-2 block sm:absolute sm:top-full text-sm sm:text-lg sm:mt-4">
						{"Thanks for subscribing! 🎉"}
					</p>
				)} */}
				{/* {status.status === "ERROR" && (
					<p className="text-red-500 text-center mt-3 block sm:absolute sm:top-full text-sm sm:text-lg sm:mt-4">
						{"Oops, something went wrong..."}
					</p>
				)} */}
			</form>
		</>
	);
}

export default Form;
