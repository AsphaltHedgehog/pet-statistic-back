import express from "express";
import KPI from "../models/KPI";

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		const kpis = await KPI.find();

		res.status(200).json(...kpis);
	} catch (error: any) {
		res.status(404).json({ message: error.message });
	}
});

export default router;
