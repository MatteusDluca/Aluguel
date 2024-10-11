import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { Clients } from './clients.interface'
import { ClientsUpdate } from './clients-update.interface'

@Injectable()
export class ClientsService {
  constructor(private readonly prisma: PrismaService) {}
  // Created Client
  async createClient(clientData: Clients) {
    const client = this.prisma.clint.create({
      data: {
        name: clientData.name,
        cpf: clientData.cpf,
        tel: clientData.tel,
        email: clientData.email,
        address: {
          create: {
            num: clientData.address.num,
            street: clientData.address.street,
            complement: clientData.address.complement,
            cep: clientData.address.cep,
          },
        },
      },
      include: {
        address: true,
      },
    })
    return client
  }

  // Listed clients
  async listedClients() {
    return this.prisma.clint.findMany()
  }

  // Updated Clients
  async patchClients(id: string, clientsint: ClientsUpdate) {
    const cli = this.prisma.clint.findUnique({ where: { id } })

    if (!cli) {
      throw new NotFoundException(`Id ${id} não encontrado`)
    }
    await this.prisma.clint.update({
      where: { id },
      data: clientsint,
    })
  }
}
