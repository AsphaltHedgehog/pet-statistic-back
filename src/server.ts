import app from "./app";
import mongoose from "mongoose";
import "dotenv/config";
import envsConfig from "./conf/envConfs";

mongoose.set("strictQuery", true);
if (!envsConfig.dbHost) {
	console.error("АЛО!!! ГДЕ dbHost!!!!");
	process.exit(1);
}

mongoose
	.connect(envsConfig.dbHost)
	.then(async () => {
		app.listen(envsConfig.port, () => {
			console.log(`Server running. Use our API on port: ${envsConfig.port}`);
		});
	})
	.catch((error) => {
		console.log(error.message);
		process.exit(1);
	});
