"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
require("reflect-metadata");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: true,
        methods: 'GET,POST,DELETE,PUT,PATCH,HEAD',
        allowedHeaders: ['Content-type', 'Authorization'],
    });
    const options = new swagger_1.DocumentBuilder()
        .setTitle('API Rental Store')
        .setDescription('Roseanne Dias rental store documentation')
        .setVersion('3.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3333);
}
bootstrap();
//# sourceMappingURL=main.js.map