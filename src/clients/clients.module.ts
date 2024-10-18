import { Module } from '@nestjs/common'
import { ClientsController } from './clients.controller'
import { PrismaService } from 'src/prisma/prisma.service'
import { ClientsService } from './clients.service'

@Module({
  controllers: [ClientsController],
  providers: [ClientsService, PrismaService],
})
export class ClientsModule {}
