import { Schema, model, models } from "mongoose";

const OrdersSchema = new Schema({
  amount: {
    type: String,
    required: true, // Ensuring the amount is mandatory
  },
  currency: {
    type: String,
    required: true, // To specify the currency (e.g., USD, ETH)
  },
  seller_email: {
    type: String,
    required: true, // Seller's email is mandatory
  },
  buyer_email: {
    type: String,
    required: false, // Buyer's email is mandatory
  },
  blockchain_tx: {
    type: String,
    required: false, // Transaction hash on the blockchain (ETH)
  },
  PG_tx: {
    type: String,
    required: false, // Payment Gateway transaction ID (e.g., PayPal)
  },
  status: {
    type: String,
    // enum: ["pending", "completed", "failed"],
    default: "pending", // Order status
  },
  created_at: {
    type: Date,
    default: Date.now, // Automatically record creation date
  },
  updated_at: {
    type: Date,
    default: Date.now, // Automatically record update date
  },
});

const Orders = models.Orders || model("Orders", OrdersSchema);
export default Orders;
