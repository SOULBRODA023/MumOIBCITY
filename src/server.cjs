const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const app = express();
const ejs = require('ejs');
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
app.set('view engine', 'ejs');
app.use(express.json());
app.use(
  cors({
    origin: ["http://127.0.0.1:5173", "http://localhost:5173"],
    methods: ["GET", "POST"],
    optionsSuccessStatus: 204,
  })
);
app.options('/sendEmail', cors());


app.use(express.static(path.join(__dirname, 'build')));

app.post('/sendEmail', async (req, res) => {
  const formData = req.body;
  const nameValue = formData.firstName;
  const template = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
      rel="stylesheet"
    />
    <title>Dieko's Card</title>
    <style>
      *,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}

body {
  width: 100%;
  height: 100vh;
  background-color: #201e29;
  color: #f3f3f3;
  position: relative;
}

.card__container {
  width: 95%;
  margin: auto;
  height: auto;
  background-color: #e42a1d;
  border-radius: 0.5rem;
  padding: 0.25rem;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
}

.card__container::after {
  content: "";
  position: absolute;
  top: -0.1rem;
  right: 7.5rem;
  width: 1.35rem;
  height: 0.7rem;
  border-radius: 0 0 1rem 1rem;
  background-color: #201e29;
}

.card__container::before {
  content: "";
  position: absolute;
  top: -0.1rem;
  right: 3rem;
  width: 1.35rem;
  height: 0.7rem;
  border-radius: 0 0 1rem 1rem;
  background-color: #201e29;
}

.card__header {
  width: 100%;
  padding-inline: 0.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 3rem;
}

.card__header .share-button svg {
  width: 1.5rem;
  height: 1.5rem;
}

.card__body {
  background-color: #201e29;
  border-radius: 0.25rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem 0.5rem;
  gap: 2rem;
}
img{
    object-fit: contain;
    display:block;
    max-width:100%;
  border-radius:0.5rem;
   height:10rem;
}
.card__body .card__image {
  width: 50%;
 
  height: 0;
  padding-bottom: 50%; 
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0.15rem;

}


.card__info {
  height: 10rem;
  display: grid;
  gap:0.5rem;
  grid-template-rows: repeat(4, 1fr);
  padding-block: 1rem;
  width: 50%;
  align-content: center;
}

.card__info h1 {
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  letter-spacing: 0.1rem;
  display: block;
}

.card__info span {
  font-size: clamp(0.8rem, 2vw, 0.9rem);
}

.card__info .time,
.card__info .date,
.card__info .name {
  width: 100%;
  display: flex;
  gap:0.5rem;
}


    </style>
  </head>
  <body>
    <div class="card__container">
      <div class="card__header">
        <span class="amount"><b>
              Free
        </b></span>
        <span class="share-button">
          <svg
            width="64"
            height="64"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              d="m229.66 109.66l-48 48a8 8 0 0 1-11.32-11.32L204.69 112H165a88 88 0 0 0-85.23 66a8 8 0 0 1-15.5-4A103.94 103.94 0 0 1 165 96h39.71l-34.37-34.34a8 8 0 0 1 11.32-11.32l48 48a8 8 0 0 1 0 11.32ZM192 208H40V88a8 8 0 0 0-16 0v120a16 16 0 0 0 16 16h152a8 8 0 0 0 0-16Z"
            />
          </svg>
        </span>
      </div>
      <div class="card__body">
        <div class="card__image">
        <img src="cid:unique-image-id" alt="image"/>
        </div>
        <div class="card__info">
          <h1>MOIBCITY</h1>
          <div class="name">
            <span>Name:</span>
            <span><b><%= nameValue %></b></span>
          </div>
          <div class="date">
            <span>Date:</span>
            <span><b>12.07.23</b></span>
          </div>
          <div class="time">
            <span>Time:</span>
            <span><b>11:00 AM</b></span>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>

 
  `;
  const compiledTemplate = ejs.compile(template);

  // Render the HTML with the provided data
  const htmlEmail = compiledTemplate({ nameValue });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      // // //   type: 'OAuth2',
      user: `ogundeyi.dieko13@gmail.com`,
      pass: `iqqzsuxqbekytyaq`,

    },
    tls: {
      rejectUnauthorized: false,
    },
  });


  const mailOptions = {
    from: 'ogundeyi.dieko13@gmail.com',
    to: `azimyusuf111@gmail.com`,
    subject: "MUMMY OF IBCITY",
    html: htmlEmail,
    attachments: [
      {
        filename: 'image.jpg', // Name to be used for the attachment
        path: path.join(__dirname, 'image.jpg'),
        cid: 'unique-image-id' // Unique identifier for the image in the HTML
      }
    ],
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


