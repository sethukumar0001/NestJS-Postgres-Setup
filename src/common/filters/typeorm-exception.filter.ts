import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';
import {
  FOREIGN_KEY_VIOLATION,
  UNIQUE_VIOLATION,
} from 'src/database/constants/pg-error-codes';
import { QueryFailedError } from 'typeorm';

@Catch(QueryFailedError)
export class TypeORMExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(TypeORMExceptionFilter.name);

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    let message = 'Database Error';
    if (exception && exception.code) {
      this.logger.error(exception);
      switch (exception.code) {
        case UNIQUE_VIOLATION:
          message = exception.detail.substring(5).replace(')=', ' ');
          break;
        case FOREIGN_KEY_VIOLATION:
          message = exception.detail
            .substring(5)
            .replace(')=', ' ')
            .replace('referenced from table', 'attached to some');
          break;
        default:
          break;
      }
    }
    response.status(HttpStatus.BAD_REQUEST).json({
      statusCode: HttpStatus.BAD_REQUEST,
      message: message,
      data: {},
    });
  }
}
