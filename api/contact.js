const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('../server/config/db');
const Contact = require('../server/models/Contact');

// Initialize configuration
dotenv.config();

let cachedConnection = null;

async function initDB() {
  if (cachedConnection && mongoose.connection.readyState === 1) {
    return cachedConnection;
  }
  await connectDB();
  cachedConnection = mongoose.connection;
  return cachedConnection;
}

module.exports = async (req, res) => {
  // CORS Configuration
  const origin = req.headers.origin;
  const allowedOrigins = [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    process.env.FRONTEND_URL
  ].filter(Boolean);

  if (origin && (allowedOrigins.includes(origin) || origin.endsWith('.vercel.app'))) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    // If no origin header (same-origin request) or general request, fallback to wildcard
    res.setHeader('Access-Control-Allow-Origin', '*');
  }

  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests for contact form submissions
  if (req.method !== 'POST') {
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    return;
  }

  try {
    // Ensure database connection is active
    await initDB();

    const { name, email, message } = req.body;

    // Validate fields
    if (!name || !email || !message) {
      res.status(400).json({ error: 'Please provide all fields' });
      return;
    }

    // Save message to database
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact Serverless Function Error:', error);
    res.status(500).json({ error: 'Server Error' });
  }
};
