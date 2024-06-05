import mongoose from "mongoose";
const Schema = mongoose.Schema;

const transactionSchema = new Schema(
	{
		buyer: { type: String },
		amount: { type: Number },
		productIds: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Product",
			},
		],
	},
	{ toJSON: { getters: true }, timestamps: true }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;
