require('dotenv').config();
const { Router } = require('express');
const sgMail = require('@sendgrid/mail');

const router = Router();

sgMail.setApiKey(process.env.SEND_GRID_API);

router.post('/', async (req, res) => {
  try {
    const msg = {
      to: 'guluis1980@gmail.com',
      from: 'elandariegomex@gmail.com',
      subject: 'Catering Info',
      html: `
      <div>
        <p><strong>Name: </strong>${req.body.first_name} ${req.body.last_name}</p>
        <p><strong>Email: </strong>${req.body.email}</p>
        <p><strong>Phone Number: </strong>${req.body.phone}</p>
        <p><strong>Description: </strong>${req.body.description}</p>
        <p><strong>Event Type: </strong>${req.body.event_type}</p>
        <p><strong>Date Requested: </strong>${req.body.date}</p>
      </div>
      `,
    };

    sgMail
      .send(msg)
      .then(() => {
        res.status(201).json({ msg: 'Email Sent' });
      })
      .catch((err) => {
        res.status(401).json({ err });
      });
  } catch (err) {
    res.status(401).json({ err });
  }
});

module.exports = router;
