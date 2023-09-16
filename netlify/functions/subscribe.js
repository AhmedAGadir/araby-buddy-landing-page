const serverless = require("serverless-http");

const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const cors = require("cors");
const corsOptions = {
	origin:
		/https?:\/\/(www\.)?([a-z0-9]+--arabybuddylanding\.netlify\.app|arabybuddylanding\.netlify\.app|arabybuddy\.com)/,
};

app.use(cors(corsOptions));

const router = express.Router();

router.post("/", async (req, res) => {
	const { email } = req.body;

	if (!email) {
		return res.status(400).json({
			message: "Email is required",
		});
	}

	try {
		const mongoose = require("mongoose");

		await mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		const Email = require("./models/email.model");
		const newEmail = new Email({ email });

		await newEmail.save();

		res.status(200).json({
			message: "Thanks for subscribing! 🎉",
		});
	} catch (error) {
		res.status(500).json({
			message: error.message || "Internal Server Error",
		});
	}
});

app.use("/.netlify/functions/subscribe", router);

module.exports.handler = serverless(app);
