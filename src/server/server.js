const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 9090;

const sendMail = async (name, email, message) => {
  let transporter = nodemailer.createTransport({
    host: process.env.OG_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.OG_USER,
      pass: process.env.OG_PASS,
    },
  });

  let info = await transporter.sendMail({
    from: `${name} <${email}>`,
    to: process.env.OG_RECEIVER,
    subject: `Message from ${name} ✔`,
    text: `${message}`,
    html: `<p>${message}</p>`,
  });

  const result = await info.messageId;
  console.log('Message sent: %s', result);
  return result;
};

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => res.redirect('https://ogworldgh.com'));

app.post('/', (req, res) => {
  const result = sendMail(req.body.name, req.body.email, req.body.message)
    .then(result => res.send({message: 'Successful'}))
    .catch(error => res.send({message: 'Server Error'}));
});

app.listen(PORT, a => console.log(`app running on http://localhost:${PORT}`));
