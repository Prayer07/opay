// routes/paystack.route.js
import express from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

router.post("/initialize-payment", async (req, res) => {
  const { email, amount } = req.body;

  try {
    const response = await axios.post(
      "https://api.paystack.co/transaction/initialize",
      {
        email,
        amount: amount * 100, // in kobo
        callback_url: "http://localhost:5173/verify-payment", // your frontend
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Failed to initialize payment" });
  }
});

router.get("/verify/:reference", async (req, res) => {
  const reference = req.params.reference;

  try {
    const response = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      }
    );

    res.json(response.data);
  } catch (err) {
    res.status(500).json({ message: "Verification failed" });
  }
});


export default router;
