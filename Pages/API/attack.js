// pages/api/attack.js
import { NextApiRequest, NextApiResponse } from 'next';
import cors from 'cors';
import express from 'express';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Enable CORS for cross-origin requests (adjust origin policy as needed)
  await cors()(req, res, () => {});

  if (req.method === 'POST') {
    try {
      const { ip, port, method, duration, payload } = req.body;

      // Example: Implement your DDoS logic here
      console.log(`Starting DDoS attack on ${ip}:${port} using method ${method}`);

      // Example response
      res.status(200).json({ message: `DDoS attack started on ${ip}:${port}` });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
