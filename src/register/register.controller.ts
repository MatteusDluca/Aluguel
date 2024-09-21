import { Body, Controller, Get, Post, UseFilters } from '@nestjs/common'
import { RegisterService } from './register.service'
import { iUser } from './register.interface'
import { RegisterFilter } from './register.filter'

@Controller()
@UseFilters(RegisterFilter)
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}
  @Post('register')
  async create(@Body() userData: iUser) {
    const registerUser = await this.registerService.newUser(userData)
    return registerUser
  }

  @Get()
  async findall(): Promise<iUser[]> {
    return this.registerService.getUser()
  }
}
