import { default as SendGridEmail } from "@sendgrid/mail";

SendGridEmail.setApiKey(process.env.SEND_GRID_API_KEY);

// TODO: save to a mongodb document
export const handler = async (event) => {
  const date = new Date();
  const applicationDto = JSON.parse(event.body);

  const msg = {
    to: ["18aguilerac@gmail.com"],
    from: "elandariegomex@gmail.com",
    subject: `El Andariego - Contacto: ${applicationDto.name}`,
    html: `
    <div>
      <p><strong>Fecha de envío: </strong>${date.toDateString()}</p>
      <p><strong>Nombre: </strong>${applicationDto.name}</p>
      <p><strong>Correo electrónico: </strong>${applicationDto.email}</p>
      <p><strong>Número de teléfono: </strong>${applicationDto.phone}</p>
      <p><strong>Descripción: </strong>${applicationDto.description}</p>
      <p><strong>Tipo de evento: </strong>${applicationDto.interestedIn}</p>
    </div>
    `,
  };

  try {
    await SendGridEmail.send(msg, true);

    return {
      statusCode: 201,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "Email was sent successfully.",
        success: true,
        data: applicationDto,
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: err.message,
        success: false,
        data: null,
      }),
    };
  }
};
