import { Body, Controller, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ApplicationDocument,
  ApplicationDto,
} from 'src/schemas/application.schema';
import { SendGridService } from 'src/services/send-grid.service';
import { SmartResponse } from 'src/types/smart-response';

@Controller('sendgrid')
export class SendGridController {
  constructor(
    @InjectModel('application')
    private applicationModel: Model<ApplicationDocument>,
    private sendGridService: SendGridService,
  ) {}

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
        <p><strong>Tipo de evento: </strong>${applicationDto.interestedIn}</p>
      </div>
      `,
    };

    if (process.env.NODE_ENV === 'production') {
      msg.to = [process.env.SEND_GRID_RECIPIENT, 'aguilerak1901@gmail.com'];
    }

    try {
      await this.sendGridService.sendEmail(msg, true);

      const createdApplication = new this.applicationModel(applicationDto);

      const applicationDoc = await createdApplication.save();

      return {
        message: 'Email was sent successfully.',
        success: true,
        statusCode: 201,
        data: applicationDoc,
      };
    } catch (err) {
      return {
        message: 'Email was not sent successfully.',
        success: false,
        statusCode: 500,
        data: null,
      };
    }
  }

  @Post('subscribe')
  async subscribe(@Body('email') email: string): Promise<SmartResponse<null>> {
    try {
      await this.sendGridService.subscribe(email);

      return {
        message: 'Subscribed successfully.',
        success: true,
        statusCode: 200,
        data: null,
      };
    } catch (err) {
      return {
        message: 'Unable to subscribe.',
        success: false,
        statusCode: 500,
        data: null,
      };
    }
  }
}
