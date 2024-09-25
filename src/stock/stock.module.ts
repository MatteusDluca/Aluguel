import { Module, MiddlewareConsumer } from '@nestjs/common'
import { StockService } from './stock.service'
import { StockController } from './stock.controller'
import { JwtModule } from '@nestjs/jwt'
import { PrismaService } from 'src/prisma/prisma.service'
import { JwtAuthGuard } from 'src/auth/jwt.guard'
import { AuthHeaderMiddleware } from './stock.middleware'

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
export class StockModule {
  configure(consumer: MiddlewareConsumer){
    consumer.apply(AuthHeaderMiddleware).forRoutes(StockController)
  }
}
