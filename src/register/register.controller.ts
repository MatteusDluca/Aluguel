import { Body, Controller, Post, UseFilters } from '@nestjs/common'
import { RegisterService } from './register.service'
import { iUser } from './register.interface'
import { RegisterFilter } from './register.filter'

@Controller()
@UseFilters(RegisterFilter)
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post('register')
  async create(@Body() userData: iUser) {
    console.log(userData)
    const registerUser = await this.registerService.newUser(userData)
    return registerUser
  }
}
