import mongoose from "mongoose";
const Schema = mongoose.Schema;

const mouthSchema = new Schema(
	{
		mouth: String,
		revenue: {
			type: Number,
			set: function (v: string) {
				return parseFloat(v);
			},
		},
		expenses: {
			type: Number,
			set: function (v: string) {
				return parseFloat(v);
			},
		},
		operationalExpenses: {
			type: Number,
			set: function (v: string) {
				return parseFloat(v);
			},
		},
		nonOperationalExpenses: {
			type: Number,
			set: function (v: string) {
				return parseFloat(v);
			},
		},
		month: { type: String },
	},
	{ toJSON: { getters: true } }
);

const daySchema = new Schema(
	{
		date: String,
		revenue: {
			type: Number,
			set: function (v: string) {
				return parseFloat(v);
			},
		},
		expenses: {
			type: Number,
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
			type: Number,
			set: function (v: string) {
				return parseFloat(v);
			},
		},
		totalRevenue: {
			type: Number,
			set: function (v: string) {
				return parseFloat(v);
			},
		},
		totalExpenses: {
			type: Number,
			set: function (v: string) {
				return parseFloat(v);
			},
		},
		expensesByCategory: {
			type: Map,
			of: {
				type: Number,
				set: function (v: string) {
					return parseFloat(v);
				},
			},
		},
		monthlyData: [mouthSchema],
		dailyData: [daySchema],
	},
	{ toJSON: { getters: true }, timestamps: true }
);

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;
