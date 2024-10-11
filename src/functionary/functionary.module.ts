import { MiddlewareConsumer, Module } from '@nestjs/common';
import { FunctionaryService } from './functionary.service';
import { FunctionaryController } from './functionary.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { functionaryMiddleware } from './functionary.middleware';

@Module({
  providers: [FunctionaryService, PrismaService],
  controllers: [FunctionaryController]
})
export class FunctionaryModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(functionaryMiddleware).forRoutes('functionary')
  }
}
