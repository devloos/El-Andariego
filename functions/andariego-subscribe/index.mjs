import { default as SendGridClient } from "@sendgrid/client";

SendGridClient.setApiKey(process.env.SEND_GRID_API_KEY);

// TODO: save to a mongodb document
export const handler = async (event) => {
  const { email } = JSON.parse(event.body);

  const request = {
    method: "PUT",
    url: "/v3/marketing/contacts",
    body: {
      contacts: [{ email }],
    },
  };

  try {
    await SendGridClient.request(request);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "Email subscribed successfully.",
        success: true,
        data: {
          email,
        },
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
