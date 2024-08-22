import { Body, Controller, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import sgMail from '@sendgrid/mail';
import { Model } from 'mongoose';
import {
  ApplicationDocument,
  ApplicationDto,
} from 'src/schemas/application.schema';
import { SmartResponse } from 'src/types/smart-response';
import { default as SendGrid } from '@sendgrid/mail';

@Controller('sendgrid')
export class SendGridController {
  constructor(
    @InjectModel('application')
    private applicationModel: Model<ApplicationDocument>,
  ) {
    SendGrid.setApiKey(process.env.SEND_GRID_API);
  }

  @Post('send-email')
  async sendEmail(
    @Body() applicationDto: ApplicationDto,
  ): Promise<SmartResponse<ApplicationDocument>> {
    const date = new Date();

    const msg = {
      to: [process.env.SEND_GRID_RECIPIENT],
      from: 'elandariegomex@gmail.com',
      subject: `El Andariego - Contacto: ${applicationDto.name}`,
      html: `
      <div>
        <p><strong>Fecha de envío: </strong>${date.toDateString()}</p>
        <p><strong>Nombre: </strong>${applicationDto.name}</p>
        <p><strong>Correo electrónico: </strong>${applicationDto.email}</p>
        <p><strong>Número de teléfono: </strong>${applicationDto.phone}</p>
        <p><strong>Descripción: </strong>${applicationDto.description}</p>
        <p><strong>Tipo de evento: </strong>${applicationDto.event_type}</p>
      </div>
      `,
    };

    if (process.env.NODE_ENV === 'production') {
      msg.to = [process.env.SEND_GRID_RECIPIENT, 'aguilerak1901@gmail.com'];
    }

    try {
      await sgMail.send(msg, true);

      const createdApplication = new this.applicationModel(applicationDto);

      const applicationDoc = await createdApplication.save();

      return {
        message: 'Email was sent successfully.',
        success: true,
        data: applicationDoc,
      };
    } catch (err) {
      return {
        message: 'Email was not sent successfully.',
        success: false,
        data: null,
      };
    }
  }
}
