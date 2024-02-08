require('dotenv').config();
const { Router } = require('express');
const sgMail = require('@sendgrid/mail');
const Applications = require('../../models/applications');
const axios = require('axios');

const router = Router();

sgMail.setApiKey(process.env.SEND_GRID_API);

router.post('/send-email', async (req, res) => {
  try {
    const request = req.body;
    const date = new Date();

    const msg = {
      to: 'guluis1980@gmail.com',
      from: 'elandariegomex@gmail.com',
      subject: `El Andariego - Contacto: ${request.name}`,
      html: `
      <div>
        <p><strong>Fecha de envío: </strong>${date.toDateString()}</p>
        <p><strong>Nombre: </strong>${request.name}</p>
        <p><strong>Correo electrónico: </strong>${request.email}</p>
        <p><strong>Número de teléfono: </strong>${request.phone}</p>
        <p><strong>Descripción: </strong>${request.description}</p>
        <p><strong>Tipo de evento: </strong>${request.event_type}</p>
      </div>
      `,
    };

    await sgMail.send(msg);

    const application = new Applications({
      name: request.name,
      email: request.email,
      phone: request.phone,
      description: request.description,
      event_type: request.event_type,
      created_at: date.toISOString(),
    });

    const payload = application.save();

    res
      .status(200)
      .json({
        success: true,
        message: 'Email was sent successfully.',
        data: payload,
      })
      .end();
  } catch (err) {
    res
      .status(400)
      .json({
        success: false,
        message: 'Email was not sent successfully.',
        data: {},
      })
      .end();
  }
});

router.post('/subscribe', async (req, res) => {
  const data = {
    contacts: [
      {
        email: req.body.email,
      },
    ],
  };

  try {
    await axios.request({
      method: 'PUT',
      url: 'https://api.sendgrid.com/v3/marketing/contacts',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.SEND_GRID_API}`,
      },
      data,
    });

    res
      .status(200)
      .json({
        success: true,
        message: 'Email has been subscribed.',
        data: {},
      })
      .end();
  } catch {
    res
      .status(400)
      .json({
        success: false,
        message: 'Failed to subscribe email.',
        data: {},
      })
      .end();
  }
});

module.exports = router;
