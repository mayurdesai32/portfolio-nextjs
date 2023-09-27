const nodemailer = require('nodemailer');
console.log(process.env.SMTP_HOST);
console.log('hello world');
const sendEmail = async (options) => {
  var transport = nodemailer.createTransport({
    service: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const message = {
    from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
    // from: 'mayur.desai@somaiya.edu',
    to: process.env.RECEIVING_EMAIL,
    subject: options.subject,
    text: ` senderEmail:${options.senderEmail} message: ${options.message} `,
  };

  await transport.sendMail(message);
};

module.exports = sendEmail;
