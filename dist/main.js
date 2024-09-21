"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(3333);
    app.enableCors({
        origin: true,
        methods: 'GET,POST,DELETE,PUT,PATH,HEAD',
        allowedHeaders: ['Content-type', 'Authorization'],
    });
}
bootstrap();
//# sourceMappingURL=main.js.map