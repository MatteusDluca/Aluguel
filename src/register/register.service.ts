import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { iUser } from './register.interface'


@Injectable()
export class RegisterService {
  constructor(private readonly prisma: PrismaService) {}
  
  async newUser(userData: iUser) {
    try {
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/
      if (!dateRegex.test(userData.happyday)) {
        throw new Error('A data happyday deve estar no formato YYYY-MM-DD')
      }
      if (!['Admin', 'User'].includes(userData.role)) {
        throw new Error('O papel do usuário deve ser Admin ou User.')
      }
    } catch (error) {
      console.error('Erro ao criar o usuário:', error)
      throw new Error('Erro ao criar o usuário: ' + error)
    }

    const user = this.prisma.user.create({
      data: {
        name: userData.name,
        cpf: userData.cpf,
        happyday: userData.happyday,
        tell: userData.tell,
        role: userData.role,
        address: {
          create: {
            num: userData.address.num,
            cep: userData.address.cep,
            complement: userData.address.complement,
            street: userData.address.street,
          },
        },
      },
    })
    return user
  }
}
