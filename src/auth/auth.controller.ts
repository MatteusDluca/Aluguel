import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { JwtAuthGuard } from './jwt.guard'

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  async login(@Body() loginData: { cpf: string; happyday: string }) {
    return this.authService.login(loginData.cpf, loginData.happyday)
  }

  @UseGuards(JwtAuthGuard)
  @Post('protected')
  async protectedRoute() {
    return { message: 'Você esta logado' }
  }
}
