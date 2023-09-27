// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const sendEmail = require('../../sendEmail');
export default async function POST(req, res) {
  try {
    console.log(req.body);
    if (!req.body.email || !req.body.name || !req.body.message) {
      return res.status(404).json({ error: 'some field is missing' });
    }

    await sendEmail({
      senderEmail: req.body.email,
      name: req.body.name,
      subject: 'Message from my nextjs portfolio',
      message: req.body.message,
    });
    res.status(200).json({ message: 'message send succesfully' });
  } catch (error) {
    console.log('error');
    console.log(error);
    res.status(501).json({ error: 'Error Occur at server side' });
  }
}

// MYWEBSITE= https://github.com/mayurdesai32

// SMTP_HOST = gmail
// SMTP_PORT = 587
// SMTP_EMAIL = mayurdesai8807@gmail.com
// SMTP_PASSWORD = qtsgqkqswmtijsnj
// SMTP_FROM_EMAIL = mayurdesai8807@gmail.com
// SMTP_FROM_NAME = MDSTORE
