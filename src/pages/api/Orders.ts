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
      const newOrder = await Orders.create(orderData);
      return res.json({ newOrder });
    } catch (error) {
      console.log(error);
    }
  }
}
