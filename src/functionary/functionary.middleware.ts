import { BadRequestException, Injectable, NestMiddleware } from '@nestjs/common'
import type { Request, Response } from 'express'
import { z } from 'zod'
import type { iUser } from './functionary.interface'

@Injectable()
export class functionaryMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const validData = z.object({
      name: z.string().min(2, 'O nome deve conter mais de 2 caracteres'),
      cpf: z
        .string()
        .length(11, 'O CPF deve ter 11 dígitos')
        .refine((val) => /^\d+$/.test(val), {
          message: 'O CPF deve conter apenas números',
        }),
      happyday: z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: 'A data deve ser no formato válido',
      }),
      tell: z
        .number()
        .min(100000000, 'O número de telefone deve ter pelo menos 9 dígitos'),
      role: z.string().min(1, 'O papel deve ser informado'),
      address: z.object({
        num: z.number().positive(),
        street: z.string().min(1),
        cep: z
          .string()
          .refine((val) => /^[0-9]{5}-[0-9]{3}$/.test(val), {
            message: 'O CEP deve estar no formato 12345-678',
          })
          .or(z.string().length(8, 'O CEP deve ter exatamente 8 dígitos')), // Suporte para 8 dígitos
        complement: z.string().optional().nullable(),
      }),
    })

    try {
      const validateData: iUser = validData.parse(req.body) as iUser
      req.body = validateData
      next()
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new BadRequestException({
          message: 'Erro ao criar o usuário',
          errors: error.errors.map((e) => ({
            path: e.path,
            message: e.message,
          })),
        })
      }
      // Tratar outros tipos de erro aqui, como erro de conversão
      throw new BadRequestException({
        message: 'Erro ao criar o usuário',
        errors: error.errors.map((e) => ({
          path: e.path,
          message: e.message,
        })),
      })
    }
  }
}
