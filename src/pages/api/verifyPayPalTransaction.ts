import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { transactionId } = req.body;

  console.log("Transaction ID:", transactionId);

  const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
  const PAYPAL_SECRET = process.env.NEXT_PUBLIC_PAYPAL_SECRET;
  const PAYPAL_API_BASE = "https://api-m.sandbox.paypal.com";

  console.log("Client ID:", PAYPAL_CLIENT_ID);
  console.log("Secret:", PAYPAL_SECRET?.substring(0, 4) + "..."); // Log only the first 4 characters of the secret

  try {
    // Get access token
    const authResponse = await fetch(`${PAYPAL_API_BASE}/v1/oauth2/token`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${PAYPAL_CLIENT_ID}:${PAYPAL_SECRET}`
        ).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    });

    if (!authResponse.ok) {
      const errorBody = await authResponse.text();
      console.error("Auth response status:", authResponse.status);
      console.error("Auth response body:", errorBody);
      throw new Error(
        `Failed to get access token: ${authResponse.status} ${errorBody}`
      );
    }
    const { access_token } = await authResponse.json();

    // Verify transaction
    try {
      const verifyResponse = await fetch(
        `${PAYPAL_API_BASE}/v1/reporting/transactions?start_date=2024-09-01T00:00:00-0700&end_date=2024-09-01T23:59:59-0700&transaction_id=${transactionId}&fields=all`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!verifyResponse.ok) {
        const errorBody = await verifyResponse.text();
        console.error("Verify response status:", verifyResponse.status);
        console.error("Verify response body:", errorBody);
        throw new Error(
          `Failed to verify transaction: ${verifyResponse.status} ${errorBody}`
        );
      }

      const data = await verifyResponse.json();

      res.status(200).json({ verified: true, ...data });
    } catch (error: any) {
      console.error("Error during transaction verification:", error);
      throw new Error(`Failed to verify transaction: ${error.message}`);
    }
  } catch (error: any) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ verified: false, error: "Failed to verify transaction" });
  }
}
