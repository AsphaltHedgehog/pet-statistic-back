import app from "./app";
import mongoose from "mongoose";
import "dotenv/config";
import envsConfig from "./conf/envConfs";
// import KPI from "./models/KPI";
// import { kpis } from "./data/data";

mongoose.set("strictQuery", true);
if (!envsConfig.dbHost) {
	console.error("Database URL must be specified in .env");
	process.exit(1);
}

mongoose
	.connect(envsConfig.dbHost)
	.then(async () => {
		app.listen(envsConfig.port, () => {
			console.log(`Server running. Use our API on port: ${envsConfig.port}`);
		});

		// await mongoose.connection.db.dropDatabase();
		// await KPI.insertMany(kpis);
	})
	.catch((error) => {
		console.log(error.message);
		process.exit(1);
	});
