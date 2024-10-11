import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common'
import { ClientsService } from './clients.service'
import { Clients } from './clients.interface'
import { ClientsUpdate } from './clients-update.interface'

@Controller('clients')
export class ClientsController {
  constructor(private readonly clients: ClientsService) {}

  @Post()
  async cClients(@Body() clientsData: Clients): Promise<Clients> {
    const registerClient = await this.clients.createClient(clientsData)
    return registerClient
  }

  @Get()
  async listedClients() {
    return this.clients.listedClients()
  }

  @Patch(':id')
  async updateClient(@Param('id') id: string, @Body() data: ClientsUpdate) {
    return this.clients.patchClients(id, data)
  }
}
