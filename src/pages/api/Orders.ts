import type { NextApiRequest, NextApiResponse } from "next";
import connectMongoDB from "../../../lib/mongodb";
import Orders from "../../../lib/database/orders";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const orderData = req.body;

  if (req.method === "POST") {
    try {
      await connectMongoDB();
      if (orderData?.getOne) {
        const order = await Orders.findById(orderData?._id);
        return res.json({ order });
      }
      const newOrder = await Orders.create(orderData);
      return res.json({ newOrder });
    } catch (error) {
      console.log(error);
    }
  } else if (req.method === "GET") {
    try {
      await connectMongoDB();
      const orders = await Orders.find({ status: "pending" });
      return res.json({ orders });
    } catch (error) {
      console.log(error);
    }
  } else if (req.method === "PUT") {
    try {
      await connectMongoDB();
      const orders = await Orders.findByIdAndUpdate(orderData?._id, orderData);
      return res.json({ orders });
    } catch (error) {
      console.log(error);
    }
  }
}
