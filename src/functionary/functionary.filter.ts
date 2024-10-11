import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';
import {
  PrismaClientRustPanicError,
  PrismaClientValidationError,
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientInitializationError,
} from '@prisma/client/runtime/library'


@Catch()
export class FunctionaryFilter implements ExceptionFilter {
  catch(exception: PrismaClientUnknownRequestError, host: ArgumentsHost) {
    const context = host.switchToHttp()
    const response = context.getResponse()
    const status = HttpStatus.CONFLICT

    response.status(status).json({
      statusCode: status,
      message: exception.message
    })
  }
} 
