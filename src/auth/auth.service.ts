import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { PrismaService } from 'src/prisma/prisma.service'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async login(cpf: string, happyday: string) {
    const user = await this.prisma.user.findUnique({ where: { cpf } })
    if (!user) {
      throw new Error('Usuário não encontrado')
    }
    if (user.happyday === happyday) {
      const payload = { cpf: user.cpf }
      const token = this.jwtService.sign(payload)
      return { access_token: token }
    }

    const hdMath = await bcrypt.compare(happyday, user.happyday)
    if (!hdMath) {
      throw new Error('Senha incorreta')
    }

    const payload = { cpf: user.cpf }
    const token = this.jwtService.sign(payload)

    return { access_token: token }
  }
}
