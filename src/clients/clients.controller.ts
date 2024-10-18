import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseFilters,
  UseGuards,
} from '@nestjs/common'
import { ClientsService } from './clients.service'
import { Clients } from './clients.interface'
import { ClientsUpdate } from './clients-update.interface'
import { RoleGuards } from 'src/stock/role-guards.service'
import { JwtAuthGuard } from 'src/auth/jwt.guard'
import { Roles } from 'src/stock/roles.decorator'
import { PrismaFilter } from 'src/prisma/prisma.filter'

@Controller('clients')
@UseFilters(PrismaFilter)
@UseGuards(JwtAuthGuard, RoleGuards)
export class ClientsController {
  constructor(private readonly clients: ClientsService) {}

  @Post()
  @Roles('Admin', 'User')
  async cClients(@Body() clientsData: Clients): Promise<Clients> {
    const registerClient = await this.clients.createClient(clientsData)
    return registerClient
  }

  @Get()
  @Roles('Admin', 'User')
  async listedClients(
    @Query('cpf') cpf?: string,
    @Query('name') name?: string,
    @Query('email') email?: string,
  ) {
    return this.clients.listedClients(cpf, name, email)
  }

  @Patch(':id')
  @Roles('Admin', 'User')
  async updateClient(@Param('id') id: string, @Body() data: ClientsUpdate) {
    return this.clients.patchClients(id, data)
  }
}
