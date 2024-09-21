import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { RegisterModule } from './register/register.module'

@Module({
  imports: [RegisterModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
