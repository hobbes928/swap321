import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!uri) {
    res.status(500).json({ error: 'MongoDB URI is not defined' });
    return;
  }

  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('swap123');
    const collection = database.collection('paymentDetails');

    if (req.method === 'GET') {
      // Fetch payment details
      const userEmail = req.headers['x-user-email'] as string; // You need to set this header in your frontend requests
      const paymentDetails = await collection.findOne({ userEmail });
      res.status(200).json(paymentDetails || { paypal: '', bankAccount: '' });
    } else if (req.method === 'POST') {
      // Save payment details
      const { paypal, bankAccount } = req.body;
      const userEmail = req.headers['x-user-email'] as string; // You need to set this header in your frontend requests
      await collection.updateOne(
        { userEmail },
        { $set: { paypal, bankAccount } },
        { upsert: true }
      );
      res.status(200).json({ message: 'Payment details saved successfully' });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error handling payment details:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
}