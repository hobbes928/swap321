import { Schema, model, models } from "mongoose";

const OrdersSchema = new Schema({
  name: String,
  amount: String,
  type: String,
});

const Orders = models.Orders || model("Orders", OrdersSchema);
export default Orders;
