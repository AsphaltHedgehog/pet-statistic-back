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
			set: function (v: string) {
				return parseFloat(v);
			},
		},
		expenses: {
			type: mongoose.Types.Decimal128,
			set: function (v: string) {
				return parseFloat(v);
			},
		},
		operationalExpenses: {
			type: mongoose.Types.Decimal128,
			set: function (v: string) {
				return parseFloat(v);
			},
		},
		nonOperationalExpenses: {
			type: mongoose.Types.Decimal128,
			set: function (v: string) {
				return parseFloat(v);
			},
		},
	},
	{ toJSON: { getters: true } }
);

const daySchema = new Schema(
	{
		date: String,
		revenue: {
			type: mongoose.Types.Decimal128,
			set: function (v: string) {
				return parseFloat(v);
			},
		},
		expenses: {
			type: mongoose.Types.Decimal128,
			set: function (v: string) {
				return parseFloat(v);
			},
		},
	},
	{ toJSON: { getters: true } }
);

const KPISchema = new Schema(
	{
		totalProfit: {
			type: mongoose.Types.Decimal128,
			set: function (v: string) {
				return parseFloat(v);
			},
		},
		totalRevenue: {
			type: mongoose.Types.Decimal128,
			set: function (v: string) {
				return parseFloat(v);
			},
		},
		totalExpenses: {
			type: mongoose.Types.Decimal128,
			set: function (v: string) {
				return parseFloat(v);
			},
		},
		expensesByCategory: {
			type: Map,
			of: {
				type: mongoose.Types.Decimal128,
				set: function (v: string) {
					return parseFloat(v);
				},
			},
		},
		mouthSchema: [mouthSchema],
		dailyData: [daySchema],
	},
	{ toJSON: { getters: true }, timestamps: true }
);

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;
