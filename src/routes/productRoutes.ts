import express from "express";
import Product from "../models/Product";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json([...products]);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
