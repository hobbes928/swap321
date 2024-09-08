import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await axios.get("https://api.coingecko.com/api/v3/global");
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data from CoinGecko" });
  }
}
