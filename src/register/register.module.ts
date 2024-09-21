import { Module, type MiddlewareConsumer } from '@nestjs/common'
import { RegisterController } from './register.controller'
import { RegisterService } from './register.service'
import { PrismaService } from 'src/prisma/prisma.service'
import { RegisterMiddleware } from './register.middleware'

@Module({
  controllers: [RegisterController],
  providers: [RegisterService, PrismaService],
})
export class RegisterModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RegisterMiddleware).forRoutes('register')
  }
}
