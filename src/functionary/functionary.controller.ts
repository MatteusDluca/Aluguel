import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseFilters,
  UseGuards,
} from '@nestjs/common'
import { FunctionaryService } from './functionary.service'
import { iUser } from './functionary.interface'
import { FunctionaryFilter } from './functionary.filter'
import { iUserUpdate } from './functionaryUp.interface'
import { RoleGuards } from 'src/stock/role-guards.service'
import { JwtAuthGuard } from 'src/auth/jwt.guard'
import { Roles } from 'src/stock/roles.decorator'

@Controller('functionary')
@UseGuards(JwtAuthGuard, RoleGuards)
export class FunctionaryController {
  constructor(private readonly functionaryService: FunctionaryService) {}
  @Get()
  @Roles('Admin')
  async showUser() {
    return this.functionaryService.showUsers()
  }

  @Post()
  @Roles('Admin')
  @UseFilters(FunctionaryFilter)
  async register(@Body() userData: iUser): Promise<iUser> {
    return this.functionaryService.newUser(userData)
  }

  @Patch(':id')
  @Roles('Admin')
  async up(@Param('id') id: string, @Body() update: iUserUpdate) {
    return this.functionaryService.patchFunctionary(id, update)
  }
}
