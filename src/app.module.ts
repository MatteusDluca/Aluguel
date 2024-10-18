import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { RegisterModule } from './register/register.module'
import { AuthModule } from './auth/auth.module'
import { StockModule } from './stock/stock.module'
<<<<<<< HEAD
import { ClientsModule } from './clients/clients.module'

@Module({
  imports: [RegisterModule, AuthModule, StockModule, ClientsModule],
=======
import { FunctionaryModule } from './functionary/functionary.module';

@Module({
  imports: [RegisterModule, AuthModule, StockModule, FunctionaryModule],
>>>>>>> master
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
