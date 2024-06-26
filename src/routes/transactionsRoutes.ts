import express from "express";
import Transaction from "../models/Transaction";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const transactions = await Transaction.find().limit(50).sort({ createdOn: -1 });
    res.status(200).json([...transactions]);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
