import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { Clients } from './clients.interface'
import { ClientsUpdate } from './clients-update.interface'

@Injectable()
export class ClientsService {
  constructor(private readonly prisma: PrismaService) {}
  // Created Client
  async createClient(clientData: Clients) {
    const clients = this.prisma.client.create({
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
    return clients
  }

  async searchClient(
    cpf?: string,
    name?: string,
    email?: string,
  ): Promise<Clients[]> {
    return await this.prisma.client.findMany({
      where: {
        AND: [
          cpf ? { cpf: { contains: cpf, mode: 'insensitive' } } : {},
          name ? { name: { contains: name, mode: 'insensitive' } } : {},
          email ? { email: { contains: email, mode: 'insensitive' } } : {},
        ],
      },
      include: {
        address: true, // Inclui o campo address na consulta
      },
    })
  }

  // Listed clients
  async listedClients(
    cpf?: string,
    name?: string,
    email?: string,
  ): Promise<Clients[]> {
    if (cpf || name || email) {
      return await this.searchClient(cpf, name, email)
    }
    return await this.prisma.client.findMany({
      include: {
        address: true, // Inclui o campo address na consulta
      },
    })
  }

  // Updated Clients
  async patchClients(id: string, clientsint: ClientsUpdate) {
    const cli = this.prisma.client.findUnique({ where: { id } })

    if (!cli) {
      throw new NotFoundException(`Id ${id} não encontrado`)
    }
    await this.prisma.client.update({
      where: { id },
      data: clientsint,
    })
  }
}
