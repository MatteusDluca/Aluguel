import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common'
import type { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

@Catch()
export class RegisterFilter implements ExceptionFilter {
  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const context = host.switchToHttp()
    const response = context.getResponse()
    const status = HttpStatus.CONFLICT

    let message: string

    switch (exception.code) {
      case 'P2002':
        {
          const field = exception.meta?.target[0]
          if (field === 'cpf') {
            message = 'Este CPF já existe'
          } else if (field === 'tell') {
            message = 'Este número de telefone já esta em uso'
          } else {
            message = 'Um erro de unicidade ocorreu'
          }
        }
        break
      default:
        message = 'Um erro inesperado ocorreu'
    }

    response.status(status).json({
      statusCode: status,
      message,
    })
  }
}
