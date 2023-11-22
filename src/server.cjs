const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;
const cors = require("cors")
require('dotenv').config();
try {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
} catch (error) {
  console.error("Error starting the server:", error);
}

app.use(express.json());
app.use(
  cors({
    origin: "http://127.0.0.1:5173",
    methods: ["GET", "POST"],
  })
)


app.use(express.static(path.join(__dirname, 'build')));

app.get('/sendEmail', async (req, res) => {
  const formData = req.body;
  const htmlEmail = `
    <p>Name: ${formData.name}</p>
    <p>Email: ${formData.email}</p>
    <p>Message: ${formData.message}</p>
  `;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      password: process.env.GMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: formData.email,
    subject: "MUMMY OF IBCITY",
    html: htmlEmail,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info);
    res.send("Form submitted successfully. Check your mail for details.");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error submitting the form. Please try again.");
  }
});

// Catch-all route to serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


