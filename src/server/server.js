const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 9090;
const HOSTNAME = 'ogworldbackend.herokuapp.com';
const RECEIVER_EMAIL = 'test@ogworldgh.com';
const HOST = 'uk7.fcomet.com'





const sendMail = async (name, email, message) => {
  let transporter = nodemailer.createTransport({
    host: HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.OG_USER,
      pass: process.env.OG_PASS,
    },
  });

  let info = await transporter.sendMail({
    from: `${name} <${email}>`,
    to: RECEIVER_EMAIL,
    subject: `Message from ${name} ✔`,
    text: `${message}`,
    html: `<p>${message}</p>`,
  });

  console.log('Message sent: %s', info.messageId);
};

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => res.send('working'));

app.post('/', (req, res) => {
  console.log(req.hostname);
  console.log(req.body);
  sendMail(req.body.name, req.body.email, req.body.message);
});

app.listen(PORT, a => console.log('app running on http://localhost:', PORT));
