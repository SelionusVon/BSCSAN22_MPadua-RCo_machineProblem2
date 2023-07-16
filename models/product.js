/*
	Program: 	E-commerce API MVP requirements
	Programmer: Ryan Phillip C. Co & Marcus Padua
	Section: 	BSCSAN22
	Start Date: July 16 2023
	End Date: 	July 16 2023
*/

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is required"],
	},
	description: {
		type: String,
		required: [true, "Description is required"],
	},
	price: {
		type: Number,
		required: [true, "Price is required"],
	},
	isActive: {
		type: Boolean,
		default: true,
	},
	createdOn: {
		type: Date,
		default: Date.now, 
	},
	userOrders: [
		{
			userId: {
				type: mongoose.Schema.Types.ObjectId,
				required: [true, "User Id is required"],
			},
			orderId: {
				type: String,
				required: [false, "Order ID is not required"],
			},
		},
	],
});

module.exports = mongoose.model("Product", productSchema);
