import { Document, Schema, model, models } from "mongoose";

// Define the TypeScript interface for the schema
interface IOrder extends Document {
  amount: string;
  currency: string;
  rate: string;
  price: string;
  escrow_id: number;
  received_amount: string;
  seller_email: string;
  seller_address: string;
  buyer_email?: string; // Optional field
  buyer_address?: string; // Optional field
  blockchain_tx?: string; // Optional field
  PG_tx?: string; // Optional field
  status: "pending" | "completed" | "failed" | "in-progress";
  created_at: Date;
  updated_at: Date;
}

// Create the schema
const OrdersSchema = new Schema<IOrder>({
  amount: {
    type: String,
    required: true, // Ensuring the amount is mandatory
  },
  currency: {
    type: String,
    required: true, // To specify the currency (e.g., USD, ETH)
  },
  rate: {
    type: String,
    required: false, // The exchange rate between currencies (e.g., USD to ETH rate)
  },
  price: {
    type: String,
    required: false, // The price of the asset at the time of the order
  },
  escrow_id: {
    type: Number,
    required: false, // The price of the asset at the time of the order
  },
  received_amount: {
    type: String,
    required: false, // The amount received after conversion
  },
  seller_email: {
    type: String,
    required: true, // Seller's email is mandatory
  },
  seller_address: {
    type: String,
    required: true, // Seller's address is mandatory
  },
  buyer_email: {
    type: String,
    required: false, // Buyer's email is optional
  },
  buyer_address: {
    type: String,
    required: false, // Buyer's address is optional
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
    enum: ["pending", "completed", "failed", "in-progress"],
    default: "pending", // Default order status
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

// Create the model
const Orders = models.Orders || model<IOrder>("Orders", OrdersSchema);
export default Orders;

// Export the interface for use in other parts of your application
export type { IOrder };
