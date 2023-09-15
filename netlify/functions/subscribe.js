const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

router.post("/.netlify/functions/subscribe", async (req, res) => {
	const { email } = req.body;

	const newEmail = new Email({ email }, { collection: "emails" });

	try {
		await newEmail.save();

		res.json({
			message: "Email saved",
		});
	} catch (error) {
		res.json({
			message: "Error saving email",
		});
	}
});

const emailSchema = new mongoose.Schema({
	email: String,
});

const Email = mongoose.model("Email", emailSchema);

app.use("/.netlify/functions/subscribe", router);

module.exports.handler = serverless(app);
