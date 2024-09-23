import { Body, Controller, Post, Res } from '@nestjs/common'
import { AuthService } from './auth.service'
import type { Response } from 'express'

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  async login(
    @Body() loginData: { cpf: string; happyday: string },
    @Res() res: Response,
  ) {
    const { cpf, happyday } = loginData
    try {
      const result = await this.authService.login(cpf, happyday)
      return res.json({
        message: 'Login realizado com sucesso!',
        access_token: result.access_token,
      })
    } catch (error) {
      return res.status(401).json({ message: 'error.message' })
    }
  }
}
