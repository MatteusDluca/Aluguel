import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { RegisterModule } from './register/register.module'
import { AuthModule } from './auth/auth.module'
import { StockModule } from './stock/stock.module'
import { FunctionaryModule } from './functionary/functionary.module'
import { ClientsModule } from './clients/clients.module'

@Module({
  imports: [
    RegisterModule,
    AuthModule,
    StockModule,
    FunctionaryModule,
    ClientsModule,
  ],
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
