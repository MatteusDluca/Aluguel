import { MiddlewareConsumer, Module, Post, RequestMethod } from '@nestjs/common'
import { FunctionaryService } from './functionary.service'
import { FunctionaryController } from './functionary.controller'
import { PrismaService } from 'src/prisma/prisma.service'
import { functionaryMiddleware } from './functionary.middleware'
import { JwtAuthGuard } from 'src/auth/jwt.guard'
import { StockModule } from 'src/stock/stock.module'

@Module({
  imports: [StockModule],
  providers: [FunctionaryService, PrismaService, JwtAuthGuard],
  controllers: [FunctionaryController],
})
export class FunctionaryModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(functionaryMiddleware)
      .forRoutes(
        { path: 'functionary', method: RequestMethod.POST },
        { path: 'functionary', method: RequestMethod.PATCH },
      )
  }
}
