import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { Request, Response } from 'express'

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaFilter implements ExceptionFilter {
  private handleUniqueConstraintError(
    exception: Prisma.PrismaClientKnownRequestError,
  ): string {
    const target = exception.meta?.target

    // Verifica qual campo foi violado e personaliza a mensagem de erro
    if (Array.isArray(target) && target.includes('email')) {
      return 'E-mail já cadastrado. Por favor, use outro e-mail.'
    }

    if (Array.isArray(target) && target.includes('cpf')) {
      return 'CPF já cadastrado. Verifique os dados.'
    }

    if (Array.isArray(target) && target.includes('username')) {
      return 'Nome de usuário já está em uso. Escolha outro nome.'
    }

    // Mensagem padrão se o campo não for identificado
    return 'Violação de chave única. Já existe um registro com os dados fornecidos.'
  }

  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()

    let statusCode: number
    let message: string

    switch (exception.code) {
      case 'P2002':
        statusCode = HttpStatus.CONFLICT
        message = this.handleUniqueConstraintError(exception)
        break

      case 'P2025':
        statusCode = HttpStatus.NOT_FOUND
        message = 'Não foi possível localizar. Verifique os dados fornecidos'
        break

      default:
        statusCode = HttpStatus.INTERNAL_SERVER_ERROR
        message = 'Desculpe, estamos resolvendo. Logo estará pronto'
        break
    }
    response.status(statusCode).json({
      statusCode,
      timestamp: new Date().toISOString(),
      path: request.url,
      error: message,
    })
  }
}
