import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { PublicException } from 'src/errors/public-exception';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const timestamp = new Date().toISOString();

    const data: any = {
      message: 'Oops! An error occurred.',
      statusCode: status,
      success: false,
      timestamp,
    };

    if (exception instanceof PublicException) {
      data.message = exception.message;
    }

    if (process.env.NODE_ENV === 'development') {
      data.message = exception.message;

      if (exception.stack) {
        data.stack = exception.stack;
      }
    }

    response.status(status).json(data);
  }
}
