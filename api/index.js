const nodemailer = require("nodemailer");

const CONFIG = {
  host: process.env.OG_HOST,
  port: process.env.OG_PORT,
  secure: true,
  auth: {
    user: process.env.OG_USER,
    pass: process.env.OG_SECRET
  }
};

const sendMail = async ({ name, email, message }) => {
  const transporter = nodemailer.createTransport({ ...CONFIG });

  let info = await transporter.sendMail({
    from: `"${name} 👻" < ${email}>`,
    to: `${process.env.OG_USER}`,
    subject: "OG World Service Message ✔",
    text: `${message}`,
    html: `<p>${message}</p>`,
    cc: [`${process.env.OG_ALT}`]
  });
  console.log(info);
};

module.exports = (req, res) => {
  const { name, email, message } = req.body;
  res.send(`Hello`);
};
