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

const sendMail = async ({ file, name, email }) => {
  const transporter = nodemailer.createTransport({ ...CONFIG });

  let info = await transporter.sendMail({
    from: `"Fund Request: ${name} 👻" <fundus.flask@gmail.com>`,
    to: `${process.env.RQST_RECEIVER}`,
    subject: "Fund Request ✔",
    text: `New Request attached: from ---${name} -- ${email}`,
    html: `<p>New Request attached: from ---${name} -- ${email}</p>`,
    attachments: [{ filename: "Fund Request", path: file }],
    cc: [email, `${process.env.RQST_USER}`]
  });
  console.log(info);
};

module.exports = (req, res) => {
  const { name, email, message } = req.body;
  res.send(`Hello`);
};
