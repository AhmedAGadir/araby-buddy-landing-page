const express = require("express");
const serverless = require("serverless-http");

const app = express();
// app.use(express.json());
const router = express.Router();

// cors
const cors = require("cors");
app.use(cors());

// require("dotenv").config();

// const mongoose = require("mongoose");

// mongoose.connect(process.env.MONGODB_URI, {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// });

router.post("/.netlify/functions/subscribe", async (req, res) => {
	res.json({
		message: "test",
	});
	// const { email } = req.body;

	// if (!email) {
	// 	return res.status(400).json({
	// 		message: "Email is required",
	// 	});
	// }

	// const newEmail = new Email({ email }, { collection: "emails" });

	// try {
	// 	await newEmail.save();

	// 	res.status(200).json({
	// 		message: "Email saved",
	// 	});
	// } catch (error) {
	// 	res.status(500).json({
	// 		message: "Internal Server Error",
	// 	});
	// }
});

// const emailSchema = new mongoose.Schema({
// 	email: String,
// });

// const Email = mongoose.model("Email", emailSchema);

app.use("/.netlify/functions/subscribe", router);

module.exports.handler = serverless(app);
