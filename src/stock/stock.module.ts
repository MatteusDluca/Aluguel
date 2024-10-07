import { Module } from '@nestjs/common'
import { StockService } from './stock.service'
import { StockController } from './stock.controller'
import { JwtModule } from '@nestjs/jwt'
import { PrismaService } from 'src/prisma/prisma.service'
import { JwtAuthGuard } from 'src/auth/jwt.guard'
import { SupaBaseService } from './supabase.service'

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [StockService, PrismaService, JwtAuthGuard, SupaBaseService],
  controllers: [StockController],
})
export class StockModule {}
