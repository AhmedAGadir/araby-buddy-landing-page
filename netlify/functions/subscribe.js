const serverless = require("serverless-http");

const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const router = express.Router();

require("dotenv").config();
const mongoose = require("mongoose");

mongoose
	.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((error) => {
		console.log(error);
	});

router.post("/", async (req, res) => {
	const { email } = req.body;

	if (!email) {
		return res.status(400).json({
			message: "Email is required",
		});
	}

	const Email = require("./models/email.model");
	const newEmail = new Email({ email });

	try {
		await newEmail.save();

		res.status(200).json({
			message: "Email saved",
		});
	} catch (error) {
		res.status(500).json({
			message: "Internal Server Error",
		});
	}
});

app.use("/.netlify/functions/subscribe", router);

module.exports.handler = serverless(app);
