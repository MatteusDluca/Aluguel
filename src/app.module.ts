import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { RegisterModule } from './register/register.module'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [RegisterModule, AuthModule],
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
