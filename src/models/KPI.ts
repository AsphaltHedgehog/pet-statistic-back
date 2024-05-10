// const mongooseCurrency = require("mongoose-currency");
import mongoose from "mongoose";
const Schema = mongoose.Schema;

// interface IKPISchema {
//   totalProfit: loadType.number
//   totalRevenue: loadType.number
//   totalExpenses: loadType.number
//   expensesByCategory: string:loadType.number[]
// }

const mouthSchema = new Schema(
	{
		mouth: String,
		revenue: {
			type: mongoose.Types.Decimal128,
			currency: "USD",
			get: (v: number) => v / 100,
		},
		expenses: {
			type: mongoose.Types.Decimal128,
			currency: "USD",
			get: (v: number) => v / 100,
		},
		operationalExpenses: {
			type: mongoose.Types.Decimal128,
			currency: "USD",
			get: (v: number) => v / 100,
		},
		nonOperationalExpenses: {
			type: mongoose.Types.Decimal128,
			currency: "USD",
			get: (v: number) => v / 100,
		},
	},
	{ toJSON: { getters: true } }
);

const daySchema = new Schema(
	{
		date: String,
		revenue: {
			type: mongoose.Types.Decimal128,
			currency: "USD",
			get: (v: number) => v / 100,
		},
		expenses: {
			type: mongoose.Types.Decimal128,
			currency: "USD",
			get: (v: number) => v / 100,
		},
	},
	{ toJSON: { getters: true } }
);

const KPISchema = new Schema(
	{
		totalProfit: {
			type: mongoose.Types.Decimal128,
			currency: "USD",
			get: (v: number) => v / 100,
		},
		totalRevenue: {
			type: mongoose.Types.Decimal128,
			currency: "USD",
			get: (v: number) => v / 100,
		},
		totalExpenses: {
			type: mongoose.Types.Decimal128,
			currency: "USD",
			get: (v: number) => v / 100,
		},
		expensesByCategory: {
			type: Map,
			of: {
				type: mongoose.Types.Decimal128,
				currency: "USD",
				get: (v: number) => v / 100,
			},
		},
		mouthSchema: [mouthSchema],
		dailyData: [daySchema],
	},
	{ toJSON: { getters: true }, timestamps: true }
);

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;
