import { Module } from '@nestjs/common'
import { StockService } from './stock.service'
import { StockController } from './stock.controller'
import { JwtModule } from '@nestjs/jwt'
import { PrismaService } from 'src/prisma/prisma.service'
import { JwtAuthGuard } from 'src/auth/jwt.guard'

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [StockService, PrismaService, JwtAuthGuard],
  controllers: [StockController],
})
export class StockModule {}
