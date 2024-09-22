import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import 'reflect-metadata'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3333)
  app.enableCors({
    origin: true,
    methods: 'GET,POST,DELETE,PUT,PATH,HEAD',
    allowedHeaders: ['Content-type', 'Authorization'],
  })
}
bootstrap()
