import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import 'reflect-metadata'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const port = process.env.PORT || 3333
  app.enableCors({
    origin: true,
    methods: 'GET,POST,DELETE,PUT,PATCH,HEAD',
    allowedHeaders: ['Content-type', 'Authorization'],
  })

  const options = new DocumentBuilder()
    .setTitle('API Rental Store')
    .setDescription('Roseanne Dias rental store documentation')
    .setVersion('3.0')
    .addBearerAuth() // Adiciona a autenticação Bearer
    .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)

  await app.listen(port)
}
bootstrap()
