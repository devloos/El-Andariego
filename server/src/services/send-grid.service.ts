import { Injectable } from '@nestjs/common';
import { MailDataRequired, default as SendGridEmail } from '@sendgrid/mail';
import { default as SendGridClient } from '@sendgrid/client';
import { ClientRequest } from '@sendgrid/client/src/request';

@Injectable()
export class SendGridService {
  constructor() {
    SendGridEmail.setApiKey(process.env.SEND_GRID_API);
    SendGridClient.setApiKey(process.env.SEND_GRID_API);
  }

  async sendEmail(
    data: MailDataRequired | MailDataRequired[],
    isMultiple?: boolean,
  ) {
    return await SendGridEmail.send(data, isMultiple);
  }

  async subscribe(email: string) {
    const request: ClientRequest = {
      method: 'PUT',
      url: '/v3/marketing/contacts',
      body: {
        contacts: [{ email }],
      },
    };

    return await SendGridClient.request(request);
  }
}
